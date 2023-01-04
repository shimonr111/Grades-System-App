import "./StudentHWSubmission.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = 'http://localhost:8080/'


let selectedCourse =''
let link = ["","","",""]

function StudentHWSubmission() {

    let Location = useLocation();
    const { state } = Location;
    const [hw, setHW] = useState('');
    const [message, setMessage] = useState('Please select a coure from the list');
    const [courses, setCourses] = useState('');
    const [id, setId] = useState(state.id_num);


    async function getInfoCourses () {
        const res = await fetch (baseUrl + 'student-submission/' + id,
        {
            method: 'GET'
        })
        const courses = await res.json()
        setCourses(courses);
    }

    useEffect(() => {
         getInfoCourses();
       }, []);

    const options = [
        { value: courses[0], label: courses[0] },
        { value: courses[1], label: courses[1] },
        { value: courses[2], label: courses[2] },
        { value: courses[3], label: courses[3] },
        { value: courses[4], label: courses[4] }
      ];

     async function getHW (e) {
        selectedCourse = e.value
        const res = await fetch (baseUrl + 'student-submission-course/' + id + '/' + selectedCourse,
        {
            method: 'GET'
        })
        const hw = await res.json()
        hw.length === 0 ? setMessage('There are no homeworks in this course') : setMessage('')
        setHW(hw);
    }

    async function postLink (e, index) {
        e.preventDefault()
        if(link[index] == ""){
            toast("Please enter link" + "  ❌");
            return;
        }
        await fetch (baseUrl + 'student-submission-send/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           course: selectedCourse,
           id: id,
           hw_number: e.currentTarget.id,
           new_link: link[index]  
        })
        
      }, toast("Your homework uploaded" + "  ✅"), link[index] = "")
    }

    const handleChange = (e, index) => {
        link[index] = e.target.value;
      };

    return (
        <div className="StudentHWSubmission">
        <Select 
        onChange={getHW}
        options={options}
        />
        {hw[0] ? <table>
        <thead><tr>
        <th>Id</th><th>Lecturer link</th>
        <th id="my-th-submit">Student link</th><th>Deadline</th>
        </tr></thead>
        <tbody>
        {Object.values(hw).map(d => <tr key={d[0]}><td>{d[0]}</td><td>{d[1]}</td><td id="my-td-submit">
        <input type="text" id="my-text" onChange={(e) => handleChange(e, d[0] - 1)} defaultValue={d[2]} key={d[2]}></input>
        <div class="my-submit"><input type="submit" id={d[0]} onClick ={(e) => postLink(e, d[0] - 1)} value={d[2] === "" ? "Send" : "Resend"} ></input></div>
        </td><td>{d[4]}</td></tr>)}
        </tbody>
        </table> : <h3><br/>{message}</h3>}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          /><ToastContainer />
        </div>
    );
}

export default StudentHWSubmission;
