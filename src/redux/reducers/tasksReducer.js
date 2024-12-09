import { types } from "./types";

const initialState = [];

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return [...state, action.payload];
        case types.TOGGLE_TASK:
            return state.map((task) =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        case types.REMOVE_TASK:
            return state.filter((task) => task.id !== action.payload);
        case types.UPDATE_TASK:
            return state.map((task) =>
                task.id === action.payload.taskId
                    ? { ...task, ...action.payload.newData }
                    : task
            );
        default:
            return state;
    }
};

const initialCategoriesState = ["Обычный пользователь", "Бизнес", "Другое"];

export const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case types.ADD_CATEGORY:
            return [...state, action.payload];

        case types.REMOVE_CATEGORY:
            return state.filter((category) => category !== action.payload);

        default:
            return state;
    }
};

export default tasksReducer;
