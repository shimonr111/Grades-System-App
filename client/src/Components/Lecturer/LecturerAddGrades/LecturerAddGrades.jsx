import { useState, useEffect } from 'react';
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LecturerAddGrades.css";
import ExitImage from "../../Assets/exit.png"
import {useLocation } from "react-router-dom";
import Popup from './Popup';


const baseUrl = 'http://localhost:8080/' //URL of server.
let Hw1_grades_arr=[]
let Hw2_grades_arr=[]
let Hw3_grades_arr=[]
let Hw4_grades_arr=[]
let Final_grades_arr=[]

let Hw1_grade=''
let Hw2_grade=''
let Hw3_grade=''
let Hw4_grade=''
let Final_grade=''


const AddGrades = () => {
  let Location = useLocation();
  const { state } = Location;

  const [buttonPopup, setButtonPopup] = useState(false); 

    const [message, setMessage] = useState(""); //message when client enter an input.
    const [AddGreadeInput, setGrade] = useState(""); //message when client enter an input.
    const [AddSavebtn, setSaveBtn] = useState(""); //message when client enter an input.
    const [ExistGrade, setExistGrade] = useState(""); //message when client enter an input.
    const [exitPopupBtn, setExitPopup] = useState(""); //message when client enter an input.
    const [feedbackGrade, setFeedbackGrade] = useState("")

    const [openHw1Btn, setOpenHw1Btn] = useState("") //message when client enter an input.
    const [openHw2Btn, setOpenHw2Btn] = useState("") //message when client enter an input.
    const [openHw3Btn, setOpenHw3Btn] = useState("") //message when client enter an input.
    const [openHw4Btn, setOpenHw4Btn] = useState("") //message when client enter an input.
    const [openFinalGradeBtn, setOpenFinalGradeBtn] = useState("")

    const [cleanPage, setCleanPage]   = useState(""); //message when client enter an input.
      
    const [submittableex1, setSubmittableex1]   = useState(""); //message when client enter an input.
    const [submittableex2, setSubmittableex2]   = useState(""); //message when client enter an input.
    const [submittableex3, setSubmittableex3]   = useState(""); //message when client enter an input.
    const [submittableex4, setSubmittableex4]   = useState(""); //message when client enter an input.
    const [submittablefinal, setSubmittablefinal]  = useState(""); //message when client enter an input.
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

     async function exitPopup(e) {
      e.preventDefault()
      setButtonPopup(false)
      document.getElementById("my-button-close").disabled = false;
      document.getElementById("postEx1").disabled = false;
      document.getElementById("postEx2").disabled = false;
      document.getElementById("postEx3").disabled = false;
      document.getElementById("postEx4").disabled = false;
      document.getElementById("postEx5").disabled = false;
      }

      async function AddNewGrade1 (e, id, grade) { //save local
        e.preventDefault()
        setFeedbackGrade(" ")
        setButtonPopup(true)
        setExitPopup( <img id="my-exit-btn" src={ExitImage} onClick={exitPopup}></img>)
        setExistGrade(id + ': ' + grade)
        setGrade(<input id="my-input-grade" type="number" min="0" max="100" onChange={event=>handleE1(event, id)}/>)
        setSaveBtn(<button id="my-save-button" onClick = {SaveNewGrade1}>Save</button>)
        document.getElementById("my-button-close").disabled = true;
        document.getElementById("postEx1").disabled = true;
      }

      async function AddNewGrade2 (e, id, grade) { //save local
        e.preventDefault()
        setFeedbackGrade(" ")
        setButtonPopup(true)
        setExitPopup( <img id="my-exit-btn" src={ExitImage} onClick={exitPopup}></img>)
        setExistGrade(id + ': ' + grade)
        setGrade(<input id="my-input-grade" type="number" onChange={event=>handleE2(event, id)}/>)
        setSaveBtn(<button id="my-save-button" onClick = {SaveNewGrade2}>Save</button>)
        document.getElementById("my-button-close").disabled = true;
        document.getElementById("postEx2").disabled = true;
      }

      async function AddNewGrade3 (e, id, grade) { //save local
        e.preventDefault()
        setFeedbackGrade(" ")
        setButtonPopup(true)
        setExitPopup( <img id="my-exit-btn" src={ExitImage} onClick={exitPopup}></img>)
        setExistGrade(id + ': ' + grade)
        setGrade(<input id="my-input-grade" type="number" onChange={event=>handleE3(event, id)}/>)
        setSaveBtn(<button id="my-save-button" onClick = {SaveNewGrade3}>Save</button>)
        document.getElementById("my-button-close").disabled = true;
        document.getElementById("postEx3").disabled = true;
      }

      async function AddNewGrade4 (e, id, grade) { //save local
        e.preventDefault()
        setFeedbackGrade(" ")
        setButtonPopup(true)
        setExitPopup( <img id="my-exit-btn" src={ExitImage} onClick={exitPopup}></img>)
        setExistGrade(id + ': ' + grade)
        setGrade(<input id="my-input-grade" type="number" onChange={event=>handleE4(event, id)}/>)
        setSaveBtn(<button id="my-save-button" onClick = {SaveNewGrade4}>Save</button>)
        document.getElementById("my-button-close").disabled = true;
        document.getElementById("postEx4").disabled = true;
      }

      async function AddNewFinalGrade (e, id, grade) { //save local
        e.preventDefault()
        setFeedbackGrade(" ")
        setButtonPopup(true)
        setExitPopup( <img id="my-exit-btn" src={ExitImage} onClick={exitPopup}></img>)
        setExistGrade(id + ': ' + grade)
        setGrade(<input id="my-input-grade" type="number" onChange={event=>handleFinal(event, id)}/>)
        setSaveBtn(<button id="my-save-button" onClick = {SaveNewFinalGrade}>Save</button>)
        document.getElementById("my-button-close").disabled = true;
        document.getElementById("postFinal").disabled = true;
      }

      const handleE1 = (event, id) => {
        setExistGrade(id + ': ' + event.target.value)
        Hw1_grade = {user_id: id, grade1: event.target.value}
      };
      
      const handleE2 = (event, id) => {
        setExistGrade(id + ': ' + event.target.value)
        Hw2_grade = {user_id: id, grade2: event.target.value}
      };

      const handleE3 = (event, id) => {
        setExistGrade(id + ': ' + event.target.value)
        Hw3_grade = {user_id: id, grade3: event.target.value}
      };

      const handleE4 = (event, id) => {
        setExistGrade(id + ': ' + event.target.value)
        Hw4_grade = {user_id: id, grade4: event.target.value}
      };

      const handleFinal = (event, id) => {
        setExistGrade(id + ': ' + event.target.value)
        Final_grade = {user_id: id, final_grade: event.target.value}
      };

      function cleanOpenHwButtons() {
        setOpenHw1Btn("")
        setOpenHw2Btn("")
        setOpenHw3Btn("")
        setOpenHw4Btn("")
        setOpenFinalGradeBtn("")
      }

      function cleanGrade() {
        setGrade("")
        setSaveBtn("")
        setExistGrade("")
      }

      //go to the main page
      const closeInfo= () => {
        setMessage("")
        setGrade("")
        setSaveBtn("")
        setCleanPage("")
        setExistGrade("")


        setSubmittableex1("")
        setSubmittableex2("")
        setSubmittableex3("")
        setSubmittableex4("")
        setSubmittablefinal("")
      }
      
      async function SaveNewGrade1 (e) { //save local
        e.preventDefault()
        if( Hw1_grade.grade1 < 0 || Hw1_grade.grade1 > 100 || Hw1_grade.grade1=="" || Hw1_grade == "") {
            setFeedbackGrade("Please put a correctly grade" + ' ❌ ' )
            return;
        }
        Hw1_grades_arr.push(Hw1_grade)
        setFeedbackGrade("Grade saved" + '  ✅' )
      }

      async function SaveNewGrade2 (e) { //save local
        e.preventDefault()
        if(Hw2_grade.grade2 < 0 || Hw2_grade.grade2 > 100|| Hw2_grade.grade2=="" || Hw2_grade == "") {
          setFeedbackGrade("Please put a correctly grade" + ' ❌ ' )
          return;
        }
        Hw2_grades_arr.push(Hw2_grade)
        setFeedbackGrade("Grade saved" + '  ✅' )
      }

      async function SaveNewGrade3 (e) { //save local
        e.preventDefault()
        if(Hw3_grade.grade3 < 0 || Hw3_grade.grade3 > 100 || Hw3_grade.grade3=="" || Hw3_grade == ""){
          setFeedbackGrade("Please put a correctly grade" + ' ❌ ' )
          return;
        }
        Hw3_grades_arr.push(Hw3_grade)
        setFeedbackGrade("Grade saved" + '  ✅' )
      }
     
      async function SaveNewGrade4 (e) { //save local
        e.preventDefault()
        if(Hw4_grade.grade4 < 0 || Hw4_grade.grade4 > 100 || Hw4_grade.grade4=="" || Hw4_grade == ""){
          setFeedbackGrade("Please put a correctly grade" + ' ❌ ' )
          return;
        }        
        Hw4_grades_arr.push(Hw4_grade)
        setFeedbackGrade("Grade saved" + '  ✅' )
      }

      async function SaveNewFinalGrade (e) { //save local
        e.preventDefault()
        if(Final_grade.final_grade < 0 || Final_grade.final_grade > 100 || Final_grade.final_grade=="" || Final_grade=="" ){
          setFeedbackGrade("Please put a correctly grade" + ' ❌ ' )
          return;
        }   
        Final_grades_arr.push(Final_grade)
        setFeedbackGrade("Grade saved" + '  ✅' )
      }

      async function gethw1detail (e) {
        e.preventDefault()
        cleanOpenHwButtons()

        setCleanPage( <button id="my-button-close" onClick = {closeInfo} > Close</button>)        

        const res = await fetch (baseUrl + 'db_request_for_grades1/?a=' + courses)
        const data = await res.json()
        if(data.length== 0) {
          setMessage("There is no student that submit their solution") 
          return;
        }
        setMessage(<table id="my-table"><thead><tr><th>Student ID</th><th>Homwork 1 solution</th><th></th></tr></thead><tbody>
        {data.map((contact) => (
        <tr key = {contact.user_id}>
            <td>{contact.user_id}</td>
            <td>{contact.hw1_grade[1]}</td>
            <td><button id="my-grade_btn" onClick = {event=>AddNewGrade1(event, contact.user_id, contact.hw1_grade[2])} >Add/Edit grade</button></td>
            </tr>
            ))}           
        </tbody></table>);

        setSubmittableex1(<button id="postEx1"  onClick = {postNewGradesEx1}>Submit grades Exercise 1</button>)
      }

      async function gethw2detail (e) {
        e.preventDefault()
        cleanOpenHwButtons()

        setCleanPage( <button id="close" onClick = {closeInfo} > Close</button>)

        const res = await fetch (baseUrl + 'db_request_for_grades2/?a=' + courses)
        const data = await res.json()
        if(data.length== 0) {
          setMessage("There is no student that submit there solution") 
          return;
        }
        setMessage(<table id="my-table"><thead><tr><th>Student ID</th><th>Homwork 2 solution</th><th></th></tr></thead><tbody>
        {data.map((contact) => (
        <tr key = {contact.user_id}>
            <td>{contact.user_id}</td>
            <td>{contact.hw2_grade[1]}</td>
            <td><button id="my-grade_btn" onClick = {event=>AddNewGrade2(event, contact.user_id, contact.hw2_grade[2])} >Add/Edit grade</button></td>
            </tr>
            ))}           
        </tbody></table>);

        setSubmittableex2(<button id="postEx2" onClick = {postNewGradesEx2}>Submit grades Exercise 2</button>)
      
      }

      async function gethw3detail (e) {
        e.preventDefault()
        cleanOpenHwButtons()

        setCleanPage( <button id="close" onClick = {closeInfo} > Close</button>)

        const res = await fetch (baseUrl + 'db_request_for_grades3/?a=' + courses)
        const data = await res.json()
        if(data.length== 0) {
          setMessage("There is no student that submit there solution") 
          return;
        }
        setMessage(<table id="my-table"><thead><tr><th>Student ID</th><th>Homwork 3 solution</th><th></th></tr></thead><tbody>
        {data.map((contact) => (
        <tr key = {contact.user_id}>
            <td>{contact.user_id}</td>
            <td>{contact.hw3_grade[1]}</td>
            <td><button id="my-grade_btn" onClick = {event=>AddNewGrade3(event, contact.user_id, contact.hw3_grade[2])} >Add/Edit grade</button></td>
            </tr>
            ))}           
        </tbody></table>);

        setSubmittableex3(<button id="postEx3" onClick = {postNewGradesEx3}>Submit grades Exercise 3</button>)
      
      }

      async function gethw4detail (e) {
        e.preventDefault()
        cleanOpenHwButtons()

        setCleanPage( <button id="close" onClick = {closeInfo} > Close</button>)

        const res = await fetch (baseUrl + 'db_request_for_grades4/?a=' + courses)
        const data = await res.json()
        if(data.length== 0) {
          setMessage("There is no student that submit there solution") 
          return;
        }
        setMessage(<table id="my-table"><thead><tr><th>Student ID</th><th>Homwork 4 solution</th><th></th></tr></thead><tbody>
        {data.map((contact) => (
        <tr key = {contact.user_id}>
            <td>{contact.user_id}</td>
            <td>{contact.hw4_grade[1]}</td>
            <td><button id="my-grade_btn" onClick = {event=>AddNewGrade4(event, contact.user_id, contact.hw4_grade[2])} >Add/Edit grade</button></td>
            </tr>
            ))}           
        </tbody></table>);

        setSubmittableex4(<button id="postEx4" onClick = {postNewGradesEx4}>Submit grades Exercise 4</button>)
      
      }

      async function getFinalGradedetail (e) {
        e.preventDefault()
        cleanOpenHwButtons()

        setCleanPage( <button id="close" onClick = {closeInfo} > Close</button>)

        const res = await fetch (baseUrl + 'db_request_for_final_grades/?a=' + courses)
        const data = await res.json()
        if(data.length== 0) {
          setMessage("There is no student that submit there solution") 
          return;
        }
        setMessage(<table id="my-table"><thead><tr><th>Student ID</th><th></th></tr></thead><tbody>
        {data.map((contact) => (
        <tr key = {contact.user_id}>
            <td>{contact.user_id}</td>
            <td><button id="my-grade_btn" onClick = {event=>AddNewFinalGrade(event, contact.user_id, contact.final_exam_grade)} >Add/Edit grade</button></td>
            </tr>
            ))}           
        </tbody></table>);

        setSubmittablefinal(<button id="postFinal" onClick = {postNewFinalGrades} >Submit final grades </button>)
      }

      async function postNewGradesEx1 (e) {
        e.preventDefault()
        const res = await fetch (baseUrl + 'db_add_new_grade_ex1/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_grades_ex1: Hw1_grades_arr,
           course: courses, 

        })
      }) 
      const data = await res.json()
      //feedback
      toast(data.feedback);
      }

      async function postNewGradesEx2 (e) {
        e.preventDefault()
        const res = await fetch (baseUrl + 'db_add_new_grade_ex2/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_grades_ex2: Hw2_grades_arr,
           course: courses
        })
      }) 
      const data = await res.json()
      //feedback
      toast(data.feedback);
      }

      async function postNewGradesEx3 (e) {
        e.preventDefault()
        const res = await fetch (baseUrl + 'db_add_new_grade_ex3/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_grades_ex3: Hw3_grades_arr,
           course: courses
        })
      }) 
      const data = await res.json()
      //feedback
      toast(data.feedback);
      }

      async function postNewGradesEx4 (e) {
        e.preventDefault()
        const res = await fetch (baseUrl + 'db_add_new_grade_ex4/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_grades_ex4: Hw4_grades_arr,
           course: courses
        })
      }) 
      const data = await res.json()
      //feedback
      toast(data.feedback);
      }

      async function postNewFinalGrades (e) {
        e.preventDefault()
        const res = await fetch (baseUrl + 'db_add_new_final_grade/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_final_grades: Final_grades_arr,
           course: courses
        })
      }) 
      const data = await res.json()
      //feedback
      toast(data.feedback);
      }
      
    return (
      <div > 
      <div className="LecturerAddGrades"> 
          <button id="my-hw-button" onClick = {gethw1detail} disabled={message}> Open HW1</button>
          <button id="my-hw-button" onClick = {gethw2detail} disabled={message}> Open HW2</button>
          <button id="my-hw-button" onClick = {gethw3detail} disabled={message}> Open HW3</button>
          <button id="my-hw-button" onClick = {gethw4detail} disabled={message} > Open HW4</button>
          <button id="my-hw-button" onClick = {getFinalGradedetail} disabled={message}> Open Final Grade</button>

          <h3><br/>{message}</h3>
          <Popup trigger={buttonPopup}>
          <h id="my-feedback">{feedbackGrade}</h>
          <h3>{exitPopupBtn}</h3>
          <h>{AddGreadeInput}</h>
          <h3>{ExistGrade}</h3>
          <h>{AddSavebtn}</h>
          </Popup>
          
          <h3>{openHw1Btn}</h3>
          <h2>{openHw2Btn}</h2>
          <h2>{openHw3Btn}</h2>
          <h2>{openHw4Btn}</h2>
          <h2>{openFinalGradeBtn}</h2>
          </div>

          <div className="my-done-btn">
          <h2>{submittableex1}</h2>
          <h2>{submittableex2}</h2>
          <h2>{submittableex3}</h2>
          <h2>{submittableex4}</h2>
          <h2>{submittablefinal}</h2>
          <h2 id="claen-page">{cleanPage}</h2>
          </div>

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
    };

      export default AddGrades;