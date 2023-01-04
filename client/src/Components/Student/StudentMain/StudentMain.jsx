import "./StudentMain.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import React from "react";
import StudentImage from "../../Assets/Student.png"

const baseUrl = 'http://localhost:8080/'

function StudentMain() {

    let Location = useLocation();
    const { state } = Location;
    const [id, setId] = useState(state.id_num);
    const [first_name, setFirst] = useState('');
    const [last_name, setLast] = useState('');

    async function getInfoUser () {
        const res = await fetch (baseUrl + 'first-last/' + id,
        {
            method: 'GET'
        })
        const user = await res.json()
        setFirst(user[0].first_name);
        setLast(user[0].last_name);
    }

    useEffect(() => {
        getInfoUser();
      }, []);

    return (
        <div className="StudentMain">
            <h2>Hello {first_name} {last_name} !</h2>
            <img src={StudentImage} id="my-student-img" alt="Student" />
            <br/>
            <br/>
            <p>
            Welcome to the GradeHub app!<br/>
            You can navigate the menu to view grades and upload solutions to the homework.
            </p>
        </div>
    );
}

export default StudentMain;
