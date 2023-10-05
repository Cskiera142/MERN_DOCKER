import { useState } from "react";
import "../styles/taskForm.css";
import PropTypes from "prop-types";

function TaskForm({ onSubmit }) {
  // Accept onSubmit as a prop
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (!title || !description) {
      alert("Enter both a title and a description...");
      return;
    }

    // Call the onSubmit function with the new task
    onSubmit({ title, description });

    setTitle("");
    setDescription("");
  }

  return (
    <div className="centered-container">
      <div>
        <form id="task-container" onSubmit={submitHandler}>
          {" "}
          {/* Add onSubmit handler */}
          <h3>Task Name</h3>
          <input
            type="text"
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <h4>Description</h4>
          <textarea
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button type="submit">Submit</button> {/* Change to type="submit" */}
        </form>
      </div>
    </div>
  );
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
