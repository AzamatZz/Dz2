import { useDispatch, useSelector } from "react-redux";
import { toggleTask, removeTask, updateTask } from "../redux/reducers/actions";

const TaskList = ({ filter }) => {
    const tasks = useSelector((state) =>
        filter
            ? state.tasksReducer.filter((task) => task.category === filter)
            : state.tasksReducer
    );
    const dispatch = useDispatch();

    const handleRemove = (taskId, e) => {
        e.stopPropagation();
        dispatch(removeTask(taskId));
    };

    const handleUpdate = (taskId, newData, e) => {
        e.stopPropagation();
        dispatch(updateTask(taskId, newData));
    };

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`task-item ${task.completed ? 'completed' : ''}`}
                    onClick={() => dispatch(toggleTask(task.id))}
                >
                    {task.text} <span>({task.category})</span>
                    <button onClick={(e) => handleRemove(task.id, e)}>Удалить</button>
                    <button onClick={(e) => handleUpdate(task.id, { text: "Обновленный текст задачи" }, e)}>
                        Обновить
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

