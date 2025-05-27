import React from "react";
import GoogleLogo from "./GoogleLogo";
import Input from "./Input";

const SignUpForm = () => {
  return (
    <section className="flex flex-col w-fit">
      <div className="flex-1">
        <button className="bg-white px-4 hover:bg-slate-200 gap-4 border-black h-fit flex items-center justify-center py-2 rounded-md font-bold">
          <GoogleLogo classes="w-4" />
          <div>Start free with Google</div>
        </button>
      </div>
      {/* <div className="text-white flex-1">----------OR-------------</div> */}
      <div className="flex-1">
        <form className="mt-4 ">
          <Input forId="email" forText="* Work Email" />
          <Input forId="name" forText="* Name" />
          <Input forId="email" forText="* Password" type="password" />
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
