"use client"; // this will tell nextjs to render page client side

import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";

type Props = {};

function AuthPage({}: Props) {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  // handle submit
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    event: "signin" | "signup" | "magiclink"
  ) => {
    // logic
  };

  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-3 sm:px-6 lg:px-8">
      <AuthForm
        handleSubmit={handleSubmit}
        email={credentials.email}
        password={credentials.password}
        setEmail={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
        setPassword={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
    </div>
  );
}

export default AuthPage;
