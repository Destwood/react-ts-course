import React, { useState, useEffect } from "react";
import "./App.css";
import Card, { CardVariant } from "./Components/Card";
import UserItem from "./Components/UserItem";
import { ITodo, IUser } from "./Components/types/types";
import axios from "axios";
import List from "./Components/List";
import TodoItem from "./Components/TodoItem";
import EventsExample from "./Components/EventsExample";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="App">
      <EventsExample />
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      />
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todos: ITodo) => <TodoItem todo={todos} key={todos.id} />}
      />
    </div>
  );
}

export default App;
