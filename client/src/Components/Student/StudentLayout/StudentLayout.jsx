import "./StudentLayout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import StudentMenu from "../StudentMenu/StudentMenu";

function StudentLayout() {
    return (
        <div className="StudentLayout">
		<header>
            <Header/>       
        </header>
        <aside>
            <StudentMenu/>        
        </aside>
        <main>
            <Outlet/>
        </main>
        </div>
    );
}

export default StudentLayout;

