import React, { useReducer, useState } from "react";

import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import "../App.css";

export const context = React.createContext();
export const Provider = context.Provider;
export const Consumer = context.Consumer;

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [state, setState] = useState(usersData);
  const initialFormState = { id: null, name: "", username: "" };
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const addUser = (user) => {
    user.id = state.length + 1;
    setState([...state, user]);
  };

  const deleteUser = (id) => {
    setState(state.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setState(state.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex justify-between flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <Provider
                value={{ currentUser, user: state, setEditing, updateUser }}
              >
                <EditUserForm />
              </Provider>
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <Provider
            value={{ users: state, deleteTodo: deleteUser, editRow: editRow }}
          >
            <UserTable />
          </Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
