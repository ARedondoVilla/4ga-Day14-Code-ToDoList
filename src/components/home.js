import React, { useState, useEffect } from "react";

export default function(props) {
    const [task, setTask] = useState("")
    const [list, setList] = useState([]);

    useEffect(() => {
       // console.log(list);
       // console.log(task);
        
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
                <div className="card mt-4">
                    <div className="card-header text-center" id="title-card">
                        <h1>To Do List</h1>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <textarea className="form-control" type="text" aria-label="With textarea" onChange={newTask} onKeyPress={pressEnter} value={task}>
                            </textarea>
                        </li>
                        {list.map((value, index) => {return <li className="list-group-item" key={index}>
                            {value} 
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                            </li>})}
                    </ul>
                </div>
            </div>

        </main>
    )
}