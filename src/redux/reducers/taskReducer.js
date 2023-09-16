import {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_TASKS_LIST,
} from "../constants/constants";

const initialState = {
  tasks: [],
};

export const taskData = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.data],
      };

    case SET_TASKS_LIST:
      console.log("USER_LIST condition ", action);
      return [...action.data];

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.users.map((task) =>
          task.id === action.data.id ? action.data : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.data),
      };
    default:
      return state;
  }
};
