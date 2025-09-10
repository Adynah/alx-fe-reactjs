import { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Write Tests", completed: true },
    ]);

    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }]);
        setNewTodo("");
    };

    const handleToggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Todo List</h2>

            <form onSubmit={handleAddTodo} className="flex mb-4">
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo" className="border p-2 flex-1 rounded-l" />
                <button type="submit" className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">Add</button>
            </form>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className={`p-2 border rounded flex justify-between items-center ${todo.completed ? "line-through text-gray-500" : ""}`}>
                        <span onClick={() => handleToggleTodo(todo.id)} style={{ cursor: "pointer" }}>{todo.text}</span>
                        <button onClick={() => handleDeleteTodo(todo.id)} className="text-red-500 hover:text-red-700">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
