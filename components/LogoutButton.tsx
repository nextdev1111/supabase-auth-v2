import React from "react";

type Props = {};

const LogoutButton = (props: Props) => {
  const logout = async () => {
    // logic
  };

  return (
    <div>
      <button onClick={logout}></button>
    </div>
  );
};

export default LogoutButton;
