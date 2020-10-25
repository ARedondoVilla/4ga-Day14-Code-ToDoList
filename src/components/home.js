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
            <div className="container">
                <h1>To Do List</h1>

                <input type="text" onChange={newTask} onKeyPress={pressEnter} value={task}/>

                <ul>
                    {list.map((value, index) => {return <li key={index}>{value}</li>})}
                </ul>

                <div className="card">
                    <div className="card-header">
                        <h1>To Do List</h1>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        {list.map((value, index) => {return <li className="list-group-item" key={index}>{value}</li>})}
                    </ul>
                </div>
            </div>

        </main>
    )
}