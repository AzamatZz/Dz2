import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";

function App() {
    const [filter, setFilter] = useState("");

    return (
        <div className="app-container">
            <h1>Менеджер задач</h1>
            <AddTask />
            <CategoryFilter onChange={setFilter} />
            <TaskList filter={filter} />
        </div>
    );
}

export default App;
