import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice"
import TodoList from "./components/todoList";
import InputField from "./components/inputField";

import './App.css';

const App = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}));
        setText("");
    };

    return (
        <div className="App">
            <h1>To Do</h1>
          <InputField text={text} handleInput={setText}handleSubmit={addTask}/>
            <TodoList/>
        </div>
    );
};

export default App;
