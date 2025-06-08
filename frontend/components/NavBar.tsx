"use client";
import React from "react";
import Button_1 from "./Button1";
import Button_2 from "./Button2";
import { FRONTEND_URL } from "@/app/config";
import { useRouter } from "next/navigation";

// type Props = {};

const NavBar = ({ isAuthenticated }: { isAuthenticated: boolean | null }) => {
  const router = useRouter();
  return (
    <nav className="m-4 mx-14 top-0 flex-row flex items-center justify-between">
      <div
        className="font-bold cursor-pointer text-white space-x-7 text-3xl tracking-widest"
        onClick={() => {
          window.location.replace(FRONTEND_URL);
        }}
      >
        Fluint
      </div>
      <div>
        <Button_2
          text="Github"
          onClick={() => {
            router.replace("https://github.com/vishwansh01");
          }}
          classes=" text-sm rounded-lg font-semibold"
        />
        <Button_1 text="Contact sales" classes=" text-sm " onClick={() => {}} />
        {!isAuthenticated && (
          <Button_1
            text="Log in"
            classes=" text-sm font-semibold"
            onClick={() => {
              router.push("/login");
            }}
          />
        )}
        {!isAuthenticated && (
          <Button_2
            text="Sign up"
            onClick={() => {
              router.push("signup");
            }}
            classes=" text-sm rounded-lg font-semibold"
          />
        )}
        {isAuthenticated && (
          <button
            className="bg-red-600 hover:bg-red-700 px-1 text-sm rounded-xl py-2 text-white"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.replace(`${FRONTEND_URL}`);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
