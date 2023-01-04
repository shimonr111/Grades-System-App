import "./LecturerLayout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import LecturerMenu from '../LecturerMenu/LecturerMenu';

function LecturerLayout() {
    return (
        <div className="LecturerLayout">
		<header>
            <Header/>       
        </header>
        <aside>
            <LecturerMenu/>        
        </aside>
        <main>
            <Outlet/>
        </main>
        </div>
    );
}

export default LecturerLayout;