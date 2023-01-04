import "./StudentViewGrades.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:8080/'

function StudentViewGrades() {

    let Location = useLocation();
    const { state } = Location;
    const [id, setId] = useState(state.id_num);
    const [grades, setGrades] = useState('');
    let i = 0;

    async function getInfoGrades () {
        const res = await fetch (baseUrl + 'student-grades/' + id,
        {
            method: 'GET'
        })
        const grades = await res.json()
        setGrades(grades);
    }

    useEffect(() => {
        getInfoGrades();
      }, []);

    function gradeColor(v){
        if(v == "")
            return "my-td-black"
        if(v < 55) 
            return "my-td-red" 
        if(v >= 55) 
            return "my-td-green"
    }
    
    return (
        <div className="StudentViewGrades">
        <table>
        <thead><tr>
        <th>Subject</th><th>Homework 1</th>
        <th>Homework 2</th><th>Homework 3</th>
        <th>Homework 4</th><th>Final Exam</th>
        </tr></thead>
        <tbody>
        {Object.values(grades).map(d =>
            <tr key={i++}><td>{d[0]}</td>{d[1].map(v => <td id={gradeColor(v)}>{v.toString() === "" ? "N/A" : v.toString()}</td>)}</tr>
        )}
        </tbody>
        </table>
        </div>
    );
}

export default StudentViewGrades;
