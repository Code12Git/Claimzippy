import Card from "./Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readTask } from "../redux/action/taskAction";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readTask());
  }, []);

  const taskData = useSelector((state) => state.taskData);
  console.log(taskData);

  return (
    <div>
      {taskData?.map((task) => (
        <Card key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Cards;
