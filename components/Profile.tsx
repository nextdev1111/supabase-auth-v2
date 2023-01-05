import React from "react";
import LogoutButton from "./LogoutButton";

type Props = {
  email: string;
  id: string;
};

const Profile = ({ email, id }: Props) => {
  return (
    <div className="bg-indigo-100 rounded-lg w-400 h-500 p-4 space-y-2">
      <h2 className="text-lg font-bold">Email</h2>
      <p>{email}</p>
      <h2 className="text-lg font-bold">Id</h2>
      <p>{id}</p>
      <LogoutButton />
    </div>
  );
};

export default Profile;
