import React, { useState } from "react";
import logo from "../images/logo.png";
import "../styles/navigation.css";
import TaskForm from "./TaskForm";

function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <div id="nav-container">
        <img id="logo" src={logo} />
        <nav id="main-nav">
          <ul>
            <li>New Task +</li>
            <li>My Tasks</li>
            <li>Completed</li>
          </ul>
        </nav>
        <div></div>
      </div>
      <TaskForm></TaskForm>
    </div>
  );
}

export default Navigation;
