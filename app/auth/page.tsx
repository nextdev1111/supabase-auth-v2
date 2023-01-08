"use client"; // this will tell nextjs to render page client side

import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";
import toast, { Toaster } from "react-hot-toast";
import supabaseBrowserClient from "../../lib/supabaseBrowserClient";

type Props = {};

function AuthPage({}: Props) {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  // magic link handler
  const magicLinkHandler = async () => {
    const loadingToast = toast.loading("Sending magic link");

    try {
      const {
        data: {},
        error,
      } = await supabaseBrowserClient.auth.signInWithOtp({
        email: credentials.email,
      });

      if (error) {
        toast.error(error.message, {
          id: loadingToast,
        });
      }

      toast.success("Email sent", {
        id: loadingToast,
        icon: "📫",
      });
    } catch (error) {
      console.log(error);

      toast.error("Error occured", {
        id: loadingToast,
      });
    }
  };

  // magic link handler
  const signUpHandler = async () => {
    const loadingToast = toast.loading("Signing up");

    try {
      const {
        data: {},
        error,
      } = await supabaseBrowserClient.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        toast.error(error.message, {
          id: loadingToast,
        });
      }

      toast.success("Confirmation Email sent", {
        id: loadingToast,
        icon: "📫",
      });
    } catch (error) {
      console.log(error);

      toast.error("Error occured", {
        id: loadingToast,
      });
    }
  };

  // magic link handler
  const signInHandler = async () => {
    const loadingToast = toast.loading("Signing in");

    try {
      const {
        data: { user },
        error,
      } = await supabaseBrowserClient.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        toast.error(error.message, {
          id: loadingToast,
        });
      }

      if (user) {
        toast.success("Signed in", {
          id: loadingToast,
          icon: "👍",
        });
      }
    } catch (error) {
      console.log(error);

      toast.error("Error occured", {
        id: loadingToast,
      });
    }
  };

  // handle submit
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    event: "signin" | "signup" | "magiclink"
  ) => {
    switch (event) {
      case "magiclink":
        await magicLinkHandler();
        break;

      case "signup":
        await signUpHandler();
        break;

      case "signin":
        await signInHandler();
        break;

      default:
        break;
    }
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
