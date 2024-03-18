import React from "react";
import "./style.css";

const ActionButton = ({ px = 0, py = 0, onClick = () => null, children }) => {
  return (
    <button
      className="action_btn"
      style={{ padding: `${py}px ${px}px`, backgroundColor: "#4E5AFE" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
