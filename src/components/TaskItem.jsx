import PropTypes from "prop-types";
import "../styles/taskItem.css";

function TaskItem({ task, onDelete }) {
  return (
    <div className="task">
      <li className="task-items title">{task.title}</li>
      <br />
      <br />
      <li className="task-items description">{task.description}</li>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
