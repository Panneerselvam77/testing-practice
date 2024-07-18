import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import RoleExample from "./components/RoleExample";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
      <RoleExample />
    </div>
  );
}

export default App;
