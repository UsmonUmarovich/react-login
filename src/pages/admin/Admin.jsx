import React from "react";

export const Admin = ({ users }) => {
  if (!users.length) return <p>Foydalanuvchilar Hali Yo`q</p>;
  return (
    <div>
      {users.map((user, index) => {
        return (
          <>
            <ol key={index} className="flex justify-center gap-10">
              <li>NAME : {user.name}</li>
              <li>SURNAME : {user.surname}</li>
              <li>USERNAME : {user.username}</li>
              <li>PASSWORD : {user.password}</li>
            </ol>
            <hr style={{width: 800}} className="m-auto"/>
            <br />
          </>
        );
      })}
    </div>
  );
};
