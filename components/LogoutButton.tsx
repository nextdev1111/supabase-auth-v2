"use client";

import React from "react";

type Props = {};

const LogoutButton = (props: Props) => {
  const logout = async () => {
    // logic
  };

  return (
    <div>
      <button
        onClick={logout}
        className="bg-red-500 px-3 py-2 rounded-md hover:bg-red-600 transition-all duration-150 font-semibold hover:cursor text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
