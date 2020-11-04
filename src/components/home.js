import React, { useState, useEffect } from "react";

export default function(props) {
    const [task, setTask] = useState(''); 
    const [list, setList] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
       console.log(list);
       // console.log(task);
       
        
    });

    function newTask(event) {
        // setTask({"id": list.length, "todo": event.target.value});
        setTask(event.target.value);
        
    }

    function pressEnter(event) {
        // console.log(event.key);
        if (task == "") {
            return
        }

        if (event.key === "Enter") {
            // setList(list.concat(task));
            // setList([...list, task]);
            setList([...list, {"id": key, "todo": task}]);
            setTask('');
            setKey(key + 1);
        }
    }

    function deleteTask(id) { // SE EJECUTA IGUAL SIN PARAR EL PARAMETRO event
        let newList = list.filter((item, index) => {
            return (item.id !== id) // DEVUELVE TODOS LOS ELEMENTOS QUE CUMPLAN ESTE REQUISITO (LO FILTRA)
        })
        
        setList(newList); // DEFINO NUEVO ESTADO DE LA LISTA TODOS
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
                            <input className="form-control form-control-lg" type="text" placeholder="New Task" 
                                onChange={newTask} onKeyPress={pressEnter} value={task}>
                            </input>
                        </li>
                        {list.map((item, index) => {  
                            return (
                            <li className="list-group-item" key={item.id}>
                                {item.todo} 
                                <button onClick={(event) => deleteTask(item.id)} type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>
                        )})}
                    </ul>
                </div>
            </div>

        </main>
    )
}