import { types } from "./types";

export const addTask = (task) => ({
    type: types.ADD_TASK,
    payload: task,
});

export const toggleTask = (taskId) => ({
    type: types.TOGGLE_TASK,
    payload: taskId,
});

export const removeTask = (taskId) => ({
    type: types.REMOVE_TASK,
    payload: taskId,
});

export const updateTask = (taskId, newData) => ({
    type: types.UPDATE_TASK,
    payload: { taskId, newData },
});
