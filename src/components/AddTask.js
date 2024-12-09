import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "../redux/reducers/actions";

const AddTask = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoriesReducer);
    const [text, setText] = useState('');
    const [category, setCategory] = useState('Обычный пользователь');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const task = {
                id: Date.now(),
                text: text,
                category: category,
                completed: false,
            };
            dispatch(addTask(task));
            setText('');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить новую задачу"
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button type="submit">Добавить задачу</button>
        </form>
    );
};

export default AddTask;
