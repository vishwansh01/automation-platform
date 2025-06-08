"use client";
import React from "react";
import Button_1 from "./Button1";
import { FRONTEND_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import Button_2 from "./Button2";
// import Button_2 from "./Button2";

// type Props = {};

const SignNavBar = ({ login }: { login?: boolean }) => {
  const router = useRouter();
  return (
    <nav className="my-4 px-14 absolute top-0 flex-row w-full flex items-center justify-between">
      <div
        className="font-bold text-white space-x-7 cursor-pointer text-3xl tracking-widest"
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
        {/* <Button_1 text="Contact sales" classes=" text-xs " /> */}
        {login ? (
          <Button_1
            text="Sigh up"
            classes=" text-sm font-semibold"
            onClick={() => {
              router.push("/signup");
            }}
          />
        ) : (
          <Button_1
            text="Log in"
            classes=" text-sm font-semibold"
            onClick={() => {
              router.push("/login");
            }}
          />
        )}
        {/* <Button_2 text="Sign up" classes=" text-xs rounded-lg font-semibold" /> */}
      </div>
    </nav>
  );
};

export default SignNavBar;
