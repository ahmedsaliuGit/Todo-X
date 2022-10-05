import { useId, useState } from "react";

function TodoInput(props) {
  const [value, setValue] = useState("");

  const { onAddTask, nextTaskId } = props;

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    if (value === "") {
      alert("Type task name");
      return;
    }

    const newTask = {
      id: `task-${nextTaskId}`,
      name: value,
      isComplete: false,
    };

    onAddTask(newTask);
    setValue("");
  }

  return (
    <div className="todo-input-container">
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={handleClick}>Create Task</button>
    </div>
  );
}

export default TodoInput;
