import "./LecturerMain.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import React from "react";
import LecturerImage from "../../Assets/Lecturer.jpg"

const baseUrl = 'http://localhost:8080/'

function LecturerMain() {

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
        <div className="LecturerMain">
            <h2>Hello {first_name} {last_name} !</h2>
            <img src={LecturerImage} id="my-lecturer-img" alt="Lecturer" />
            <br/>
            <br/>
            <p>
            Welcome to the GradeHub app!<br/>
            You can navigate the menu to upload homework and add grades to the students.
            </p>
        </div>
    );
}

export default LecturerMain;
