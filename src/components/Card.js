import React from "react";

const Card = ({ val, onDelete, onStatusDone }) => {
  return (
    <div
      className={`p-4 mb-2 border ${
        val.status === "completed" ? "bg-[#dffe4]" : "bg-white"
      }`}
    >
      <h2 className="text-lg">{val.title}</h2>
      <p>Category: {val.category}</p>
      <p>{val.description}</p>
      <button
        className="mr-2 bg-green-200 "
        onClick={() => onStatusDone(val.id)}
      >
        Done
      </button>
      <button
        className="bg-red-200 "
        onClick={() => onDelete(val.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
