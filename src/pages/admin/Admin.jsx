import React from "react";

export const Admin = ({ users }) => {
  if (!users.length) return <p>Foydalanuvchilar Hali Yo`q</p>;
  return (
    <div>
      {users.map((user, index) => {
        return (
          <ul key={index}>
            <li>{user.name}</li>
            <li>{user.surname}</li>
            <li>{user.username}</li>
            <li>{user.password}</li>
          </ul>
        );
      })}
    </div>
  );
};
