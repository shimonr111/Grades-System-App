import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./LecturerMenu.css";
import React from "react";

const baseUrl = 'http://localhost:8080/'

function LecturerMenu() {

  let Location = useLocation();
  const { state } = Location;
  const [id, setId] = useState(state.id_num);

  const navigate = useNavigate();

const logout = (event) => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="LecturerMenu">
          <Link to="/lecturer-layout/main" state={{id_num : id}}>Home</Link>
          <Link to="/lecturer-layout/ex"  state={{id_num : id}} >Add Homework</Link>
          <Link to="/lecturer-layout/grades" state={{id_num : id}}>Add Grades</Link>
          <button onClick = {logout}>Logout</button>
    </div>
  );
};

export default LecturerMenu;
