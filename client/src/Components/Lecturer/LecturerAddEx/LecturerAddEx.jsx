import "./LecturerAddEx.css";
import ListImage from "../../Assets/list.png"
import AskImage from "../../Assets/ask.png"
import ExitImage from "../../Assets/exit.png"

import React from "react";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css"; 
import 'react-toastify/dist/ReactToastify.css';
import PopupAddEx from './PopupAddEx';

let Hw1_input=''
let Hw2_input=''
let Hw3_input=''
let Hw4_input=''

let DateHw1 = ''
let DateHw2 = ''
let DateHw3 = ''
let DateHw4 = ''

let ExistDateHw1 = ''
let ExistDateHw2 = ''
let ExistDateHw3 = ''
let ExistDateHw4 = ''

const baseUrl = 'http://localhost:8080/' //URL of server.

const LecturerAddEx = () => {
  let Location = useLocation();
  const { state } = Location;
    const [buttonPopup, setButtonPopup] = useState(false); 
    const [message, setMessage] = useState(""); //message when client enter an input.
    const [exitPopup, setExitPopup] = useState(""); //message when client enter an input.

    const [Hw1, setHw1] = useState(''); //lecture add Hw1
    const [Hw2, setHw2] = useState(''); //lecture add Hw2
    const [Hw3, setHw3] = useState(''); //lecture add Hw3
    const [Hw4, setHw4] = useState(''); //lecture add Hw4

    const [m, setM] = useState(''); 

    var curr = new Date();
    curr.setDate(curr.getDate());
    var currDate = curr.toISOString().substring(0,10);

    const [existDateHW1, setDateHW1] = useState(''); 
    const [existDateHW2, setDateHW2] = useState(''); 
    const [existDateHW3, setDateHW3] = useState(''); 
    const [existDateHW4, setDateHW4] = useState(''); 
  

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

    const handleChangeHw1 = (event) => {
        setHw1(event.target.value);
        Hw1_input=event.target.value
      };

      const handleChangeHw2 = (event) => {
        setHw2(event.target.value);
        Hw2_input=event.target.value
      };

      const handleChangeHw3 = (event) => {
        setHw3(event.target.value);
        Hw3_input=event.target.value
      };

      const handleChangeHw4 = (event) => {
        setHw4(event.target.value);
        Hw4_input=event.target.value
      };

      const handleDateHw1 = (event) => {
       DateHw1 = event.target.value
       setDateHW1(DateHw1)
      };

      const handleDateHw2 = (event) => {
        DateHw2 = event.target.value
        setDateHW2(DateHw2)
       };

       const handleDateHw3 = (event) => {
        DateHw3 = event.target.value
        setDateHW3(DateHw3)
       };

       const handleDateHw4 = (event) => {
        DateHw4 = event.target.value
        setDateHW4(DateHw4)
       };
      
       async function getInfo (e) {
        e.preventDefault()

        const res = await fetch (baseUrl + 'db_request_for_get_user/?a=' + id,
        {
            method: 'GET',
        
        })
        const data = await res.json()
       //get user
      }

      function checkValidDate(hw_deadline) {
        hw_deadline = hw_deadline.split('/')
        hw_deadline = new Date(Number(hw_deadline[2]), Number(hw_deadline[1]) - 1, Number(hw_deadline[0]) + 1)
        var exist_hw_deadline = hw_deadline.toISOString().substring(0,10);
        return exist_hw_deadline;
    }

      async function getInfo (e) {
        e.preventDefault()
        const res = await fetch (baseUrl + 'db_request_for_h1_4/?a=' + courses,
        {
            method: 'GET',
        
        })
        
        const data = await res.json()
        setHw1(data.hw1_grade[0])
        setHw2(data.hw2_grade[0])
        setHw3(data.hw3_grade[0])
        setHw4(data.hw4_grade[0])
    
        
        ExistDateHw1 = checkValidDate(data.hw1_grade[3]);
        setDateHW1(ExistDateHw1)
        ExistDateHw2 = checkValidDate(data.hw2_grade[3]);
        setDateHW2(ExistDateHw2)
        ExistDateHw3 = checkValidDate(data.hw3_grade[3]);
        setDateHW3(ExistDateHw3)
        ExistDateHw4 = checkValidDate(data.hw4_grade[3]);
        setDateHW4(ExistDateHw4)

        //setDateHW1(date)
      }

    

    async function postNewHw1 (e) {
        e.preventDefault()
      
        //validation
        if(Hw1_input =="") {
          toast("Please put an input" + ' ❌');
          return;
        }

        if(DateHw1.length == 0) {
          toast("Please put a date" + ' ❌');
          return;
        } else if(DateHw1 < currDate){
              toast("Please put a correctly date" + ' ❌');
              return;
        }

        const res = await fetch (baseUrl + 'db_add_new_hw1/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_ex1: Hw1_input,
           course: courses,  
           date: DateHw1.split("-")
        })
      }) 
      const data = await res.json()
      //feedback
      toast('✅ ' + data.feedback);
      }

      async function postNewHw2 (e) {
        e.preventDefault()
        //validation
        if(Hw2_input =="") {
          toast("Please put an input" + ' ❌');
          return;
        }
        if(DateHw2.length == 0) {
          toast("Please put a date" + ' ❌');
          return;
        } else if(DateHw2 < currDate){
          toast("Please put a correctly date" + ' ❌');
          return;
        }

        const res = await fetch (baseUrl + 'db_add_new_Hw2/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_ex2: Hw2_input,
           course: courses, 
           date: DateHw2.split("-")
        })
      }) 
      const data = await res.json()
      //feedback
      toast('✅ ' + data.feedback);
      }

      async function postNewHw3 (e) {
        e.preventDefault()
        //validation
        if(Hw3_input =="") {
          toast("Please put an input" + ' ❌');
          return;
        }
        if(DateHw3.length == 0) {
          toast("Please put a date" + ' ❌');
          return;
        } else if(DateHw3 < currDate){
          toast("Please put a correctly date" + ' ❌');
          return;
        }
        const res = await fetch (baseUrl + 'db_add_new_Hw3/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_ex3: Hw3_input,
           course: courses, 
           date: DateHw3.split("-")

        })
      }) 
      const data = await res.json()
      //feedback
      toast('✅ ' + data.feedback);
      }

      async function postNewHw4 (e) {
        e.preventDefault()
        //validation
        if(Hw4_input =="") {
          toast("Please put an input" + ' ❌');
          return;
        }
        if(DateHw4.length == 0) {
          toast("Please put a date" + ' ❌');
          return;
        } else if(DateHw4 < currDate){
          toast("Please put a correctly date" + ' ❌');
          return;
        }
        const res = await fetch (baseUrl + 'db_add_new_Hw4/',
        {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
        },
        body: JSON.stringify({
           new_ex4: Hw4_input,
           course: courses, 
           date: DateHw4.split("-")
        })
      }) 
      const data = await res.json()
      //feedback
      toast('✅ ' + data.feedback);
      }
      async function exitPopap(e) {
        e.preventDefault()
        setButtonPopup(false)
        }
      
      async function askCheck(e) {
              e.preventDefault()
              setButtonPopup(true)
              setExitPopup(<img id="my-exit-btn_addEx" src={ExitImage} onClick={exitPopap}></img>)         
              setMessage("Check exist homeworks")  
      }

  return (
    <div className="LecturerAddEx"> 
      <img className="my-btn-check" src={ListImage} onClick = {getInfo} ></img>
      <img id="my-img-ask" src={AskImage} onClick={askCheck}></img>
      <br></br><br></br>
     
      <PopupAddEx trigger={buttonPopup}> <p>{message}</p> <h>{exitPopup}</h> </PopupAddEx>
     
      <h1>{m}</h1>
      <input type="text" id="my-input-hw" name="Hw1" onChange={handleChangeHw1} value={Hw1} />
      <input type="date" id="my-input-date" onChange={handleDateHw1} value={existDateHW1} />
      <button id="my-btn-hw" onClick={postNewHw1}>Add/Change Homework 1</button>
      <br></br>
      <br></br>
      <input type="text" id="my-input-hw" name="Hw2" onChange={handleChangeHw2} value={Hw2} />
      <input type="date" id="my-input-date" onChange={handleDateHw2} value={existDateHW2} />
      <button id="my-btn-hw" onClick = {postNewHw2}>Add/Change Homework 2</button>
      <br></br>
      <br></br>
      <input type="text" id="my-input-hw" name="Hw3" onChange={handleChangeHw3} value={Hw3} />
      <input type="date" id="my-input-date" onChange={handleDateHw3} value={existDateHW3}/>
      <button id="my-btn-hw" onClick = {postNewHw3}>Add/Change Homework 3</button>
      <br></br>
      <br></br>
      <input type="text" id="my-input-hw" name="Hw4" onChange={handleChangeHw4} value={Hw4} />
      <input type="date" id="my-input-date" onChange={handleDateHw4} value={existDateHW4}/>
      <button id="my-btn-hw" onClick = {postNewHw4}>Add/Change Homework 4</button>
      <br></br>
      <br></br>

     
      
      
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
    
  export default LecturerAddEx;