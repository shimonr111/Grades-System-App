import "./StudentViewAverage.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:8080/'

function StudentViewAverage () {

    let Location = useLocation();
    const { state } = Location;
    const [id, setId] = useState(state.id_num);
    const [avg, setAvg] = useState('');

    async function getInfoAvg () {
        const res = await fetch (baseUrl + 'student-average/' + id,
        {
            method: 'GET'
        })
        const avg = await res.json()
        setAvg(avg);
    }
    
    useEffect(() => {
        getInfoAvg();
      }, []);

    function avgColor(v){
        if(v < 55)
            return "my-p-red"
        else return "my-p-green"
    }

    return (
        <div className="StudentViewAverage">
            <p>ID: {id}</p>
            Your average is: 
            <p id={avgColor(Number(avg).toFixed(2))}> {Number(avg).toFixed(2)} </p>
        </div>
    );
}

export default StudentViewAverage;
