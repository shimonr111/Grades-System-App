import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./StudentMenu.css";
import React from "react";

const baseUrl = 'http://localhost:8080/'

function StudentMenu() {

    let Location = useLocation();
    const { state } = Location;
    const [id, setId] = useState(state.id_num);

    const navigate = useNavigate();

    const logout = (event) => {
        localStorage.clear();
        navigate("/");
      };

    return (
        <div className="StudentMenu">
            <Link to="/student-layout/main" state={{id_num : id}}>Home</Link>
            <Link to="/student-layout/average" state={{id_num : id}}>My Average</Link>
            <Link to="/student-layout/grades" state={{id_num : id}}>View Grades</Link>
            <Link to="/student-layout/submission" state={{id_num : id}}>HW Submission</Link>
            <button onClick = {logout}>Logout</button>
        </div>
    );
}

export default StudentMenu;
