import React, { useEffect, useState } from "react";

export default function UserList() {
  const [user, setUSer] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUSer(data));
  }, []);

  return (
    <ul>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
