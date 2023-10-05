import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
