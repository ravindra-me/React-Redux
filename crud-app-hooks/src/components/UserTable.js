import React, { useContext } from "react";
import { context } from "./App";
const UserTable = () => {
  const { users, deleteTodo, editRow } = useContext(context);
  console.log(useContext(context));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => editRow(user)}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => deleteTodo(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
