import Todo from "./Todo";

function Todos(props) {
  const { tasks, onChange, onDeleteTask, onUpdateTask, filter, filterMap } =
    props;

  let taskElems =
    tasks.length === 0 ? (
      <p className="no-task">No task to be completed</p>
    ) : (
      <ul>
        {tasks.filter(filterMap[filter]).map((task) => (
          <Todo
            key={task.id}
            task={task}
            onChange={onChange}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </ul>
    );

  return taskElems;
}

export default Todos;
