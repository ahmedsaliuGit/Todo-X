import { useState } from "react";

function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    task: { id, name, isComplete },
    onChange,
    onDeleteTask,
    onUpdateTask,
  } = props;

  const [newName, setNewName] = useState(name);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleNewNameSave(id) {
    if (newName === "") {
      alert("Type task name");
      return;
    }

    onUpdateTask(id, newName);
    setIsEditing(false);
  }

  const editingView = (
    <li className="item-container">
      <input
        type="checkbox"
        className="complete-box"
        defaultChecked={isComplete}
        onChange={() => onChange(id)}
      />
      <div className="task-name">
        <input type="text" defaultValue={newName} onChange={handleChange} />
      </div>
      <div className="task-btn">
        <button onClick={() => handleNewNameSave(id)}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    </li>
  );

  const templateView = (
    <li className="item-container">
      <input
        type="checkbox"
        className="complete-box"
        defaultChecked={isComplete}
        onChange={() => onChange(id)}
      />
      <div className="task-name">
        <span>{name}</span>
      </div>
      <div className="task-btn">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDeleteTask(id)}>Delete</button>
      </div>
    </li>
  );

  return isEditing ? editingView : templateView;
}

export default Todo;
