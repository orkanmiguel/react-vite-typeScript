import React from "react";
import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";

//https://reqres.in/api/users?page=2

export const UserPage = () => {
  const { users, nextPage, previewPage } = useUsers();

  return (
    <>
      <h3>Usuario:</h3>

      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button
          onClick={nextPage}
          className="p-2 bg-blue-500 text-white rounded-[10px]"
        >
          Anteriores
        </button>
        <button
          onClick={previewPage}
          className="p-2 bg-blue-500 text-white rounded-[10px]"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
