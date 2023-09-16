import React from "react";

const Card = ({ task }) => {
  console.log(task);
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{task.title}</div>
        <p class="text-gray-700 text-base">{task.description}</p>
      </div>
    </div>
  );
};

export default Card;
