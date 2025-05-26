import React from "react";
import GoogleLogo from "./GoogleLogo";
import Input from "./Input";

const SignUpForm = () => {
  return (
    <section>
      <div>
        <button className="bg-white px-4 hover:bg-slate-200 gap-4 border-black h-fit flex items-center justify-center py-2 rounded-md font-bold">
          <GoogleLogo classes="w-4" />
          <div>Start free with Google</div>
        </button>
      </div>
      <div>
        <form>
          <Input forId="email" forText="* Work Email" />
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
