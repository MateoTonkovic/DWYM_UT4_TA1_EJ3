import "bulma/css/bulma.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2 className="title is-4 has-text-centered mt-5">Lista de Tareas</h2>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Escribe una tarea"
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={addTask}>
            Agregar Tarea
          </button>
        </div>
      </div>

      <ul className="list">
        {tasks.map((task, index) => (
          <li className="box" key={index}>
            <div className="columns is-vcentered">
              <div className="column is-10">{task}</div>
              <div className="column is-2 has-text-right">
                <button
                  className="button is-danger is-small"
                  onClick={() => removeTask(index)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
