import { useState } from "react";
import FilterButton from "./components/FilterButton";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

const defaultTasks = [
  { id: 1, name: "Cooling off", isComplete: false },
  { id: 2, name: "Shopping", isComplete: true },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isComplete,
  isCompleted: (task) => task.isComplete,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [filter, setFilter] = useState("All");

  function addTask(task) {
    const newTasks = tasks.concat(task);

    setTasks(newTasks);
  }

  function handleToggle(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  function updateTask(id, name) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="app-container">
      <h1>Todo Extra</h1>
      <TodoInput onAddTask={addTask} nextTaskId={tasks.length + 1} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <Todos
        tasks={tasks}
        onChange={handleToggle}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
        filter={filter}
        filterMap={FILTER_MAP}
      />
    </div>
  );
}

export default App;
