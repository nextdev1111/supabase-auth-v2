import React from "react";
import Profile from "../components/Profile";
import createServerClient from "../lib/supabaseServerClient";

type Props = {};

async function HomePage({}: Props) {
  const supabaseClient = createServerClient();

  // fetch user data
  const fetchUser = async () => {
    const {
      data: { user },
      error,
    } = await supabaseClient.auth.getUser();
    return { user };
  };

  const { user } = await fetchUser();

  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-3 sm:px-6 lg:px-8">
      <Profile email={user?.email || ""} id={user?.id || ""} />
    </div>
  );
}

export default HomePage;
