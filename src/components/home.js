import React, { useState, useEffect } from "react";

export default function(props) {
    const [task, setTask] = useState("")
    const [list, setList] = useState([]);

    useEffect(() => {
       // console.log(list);
       console.log(task);
        
    });

    function newTask(event) {
        setTask(event.target.value);  
    }

    function pressEnter(event) {
        // console.log(event.key);
        if (task == "") {
            return
        }

        if (event.key === "Enter") {
            setList(list.concat(task));
            setTask("");
        }
    }

     return (
        <main className="page">
            <h1>To Do List</h1>

            <input type="text" onChange={newTask} onKeyPress={pressEnter} value={task}/>

            <ul>
                {list.map((value, index) => {return <li key={index}>{value}</li>})}
            </ul>

        </main>
    )
}