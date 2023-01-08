"use client";

import React from "react";
import toast from "react-hot-toast";
import supabaseBrowserClient from "../lib/supabaseBrowserClient";

type Props = {};

const LogoutButton = (props: Props) => {
  const logout = async () => {
    const loadingToast = toast.loading("logging out");
    // logic
    const { error } = await supabaseBrowserClient.auth.signOut();

    if (error) {
      toast.error(error.message, {
        id: loadingToast,
      });
    } else {
      toast.success("You are logged.", {
        id: loadingToast,
      });
    }
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
