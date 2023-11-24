import React from "react";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { RootState } from "./store";

export interface Todo {
  id: number;
  text: string;
}

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={(id) => dispatch(deleteTodo(id))}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
