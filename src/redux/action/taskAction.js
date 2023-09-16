import { CREATE_TASK, READ_TASK } from "../constants/constants";
export const createTask = (data) => {
  console.log("action called create", data);
  return {
    type: CREATE_TASK,
    data,
  };
};

export const readTask = () => {
  return {
    type: READ_TASK,
  };
};
