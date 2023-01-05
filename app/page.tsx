import React from "react";
import Profile from "../components/Profile";

type Props = {};

function HomePage({}: Props) {
  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-3 sm:px-6 lg:px-8">
      <Profile email={"taranpreetsingh1177@gmail.com"} id={"udiadafadffad"} />
    </div>
  );
}

export default HomePage;
