import React, { useContext, useState, useEffect } from "react";
import { context } from "./App";

const EditUserForm = () => {
  const { currentUser, updateUser, setEditing } = useContext(context);
  const [user, setUser] = useState(currentUser);
  console.log(useContext(context));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(currentUser);
  }, [useContext(context)]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
