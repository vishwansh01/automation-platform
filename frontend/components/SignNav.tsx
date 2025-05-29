"use client";
import React from "react";
import Button_1 from "./Button1";
// import Button_2 from "./Button2";

// type Props = {};

const SignNavBar = ({ login }: { login?: boolean }) => {
  return (
    <nav className="my-4 px-14 absolute top-0 flex-row w-full flex items-center justify-between">
      <div className="font-bold text-white space-x-7 text-3xl tracking-widest">
        Fluint
      </div>
      <div>
        {/* <Button_1 text="Contact sales" classes=" text-xs " /> */}
        {login ? (
          <Button_1
            text="Sigh up"
            classes=" text-sm font-semibold"
            onClick={() => {}}
          />
        ) : (
          <Button_1
            text="Log in"
            classes=" text-sm font-semibold"
            onClick={() => {}}
          />
        )}
        {/* <Button_2 text="Sign up" classes=" text-xs rounded-lg font-semibold" /> */}
      </div>
    </nav>
  );
};

export default SignNavBar;
