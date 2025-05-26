import React from "react";
import Button_1 from "./Button1";
// import Button_2 from "./Button2";

// type Props = {};

const SignNavBar = () => {
  return (
    <nav className="m-4 mx-14 top-0 flex-row flex items-center justify-between">
      <div className="font-bold text-white space-x-7 text-3xl tracking-widest">
        Fluint
      </div>
      <div>
        {/* <Button_1 text="Contact sales" classes=" text-xs " /> */}
        <Button_1 text="Log in" classes=" text-sm font-semibold" />
        {/* <Button_2 text="Sign up" classes=" text-xs rounded-lg font-semibold" /> */}
      </div>
    </nav>
  );
};

export default SignNavBar;
