import React from "react";
import Profile from "../components/Profile";

type Props = {};

async function HomePage({}: Props) {
  const user = { email: "email@example.com", id: "afadfa" };

  // fetch user data

  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-3 sm:px-6 lg:px-8">
      <Profile email={user?.email || ""} id={user?.id || ""} />
    </div>
  );
}

export default HomePage;
