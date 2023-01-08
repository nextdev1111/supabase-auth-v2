import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

type Props = {
  handleSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    event: "signin" | "signup" | "magiclink"
  ) => void;
  email: string;
  password: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthForm = ({
  handleSubmit,
  email,
  password,
  setEmail,
  setPassword,
}: Props) => {
  return (
    <div className="w-full max-w-md space-y-8">
      <form
        className="mt-8 space-y-6"
        onSubmit={(e) => {
          // to prevent refreshnig when user submits the form.
          e.preventDefault();
        }}
      >
        <h1 className="text-xl font-bold">Sign In</h1>
        <div className="-space-y-px rounded-md shadow-sm">
          {/* email box */}
          <input
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={setEmail}
          />
          {/* email box */}
          <input
            required
            type="password"
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={password}
            onChange={setPassword}
            placeholder="Please enter your password"
          />
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="group transition-all duration-150 space-y-3">
          <button
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={(e) => handleSubmit(e, "signin")}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign In
          </button>
          <button
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={(e) => handleSubmit(e, "signup")}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign Up
          </button>
          <button
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={(e) => handleSubmit(e, "magiclink")}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Magic Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
