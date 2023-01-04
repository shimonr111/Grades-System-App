import React from "react";
import Login from '../Login/Login';
import StudentLayout from '../Student/StudentLayout/StudentLayout';
import StudentMain from '../Student/StudentMain/StudentMain';
import StudentViewAverage from '../Student/StudentViewAverage/StudentViewAverage';
import StudentViewGrades from '../Student/StudentViewGrades/StudentViewGrades';
import StudentHWSubmission from '../Student/StudentHWSubmission/StudentHWSubmission';
import {Routes, Route} from 'react-router-dom';
import LecturerLayout from "../Lecturer/LecturerLayout/LecturerLayout";
import LecturerMain from '../Lecturer/LecturerMain/LecturerMain';
import LecturerAddEx from '../Lecturer/LecturerAddEx/LecturerAddEx';
import LecturerAddGrades from '../Lecturer/LecturerAddGrades/LecturerAddGrades';
import Page404 from "../Page404/Page404";

//component that saves all path of the project and define the routing each path.
function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="student-layout" element={<StudentLayout/>} >
          <Route path="main" element={<StudentMain/>} />
          <Route path="average" element={<StudentViewAverage/>} />
          <Route path="grades" element={<StudentViewGrades/>} />
          <Route path="submission" element={<StudentHWSubmission/>} />
        </Route>
        <Route path="lecturer-layout" element={<LecturerLayout/>} >
          <Route path="main" element={<LecturerMain/>} />
          <Route path="ex" element={<LecturerAddEx/>} />
          <Route path="grades" element={<LecturerAddGrades/>} />
        </Route>
        <Route path="*" element={<Page404/>}/>
    </Routes>
  );
};

export default Routing;
