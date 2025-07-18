"use client";
import React, { useState } from "react";
import GoogleLogo from "./GoogleLogo";
import Input from "./Input";
import Button_3 from "./Button3";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/app/config";
import axios from "axios";

const SignInForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  return (
    <section className="flex flex-col">
      <div className="">
        <button className="bg-white px-4 hover:bg-slate-200 gap-4 border-black h-fit flex items-center w-[20vw] justify-center py-2 rounded-md font-bold">
          <GoogleLogo classes="w-4" />
          <div>Start free with Google</div>
        </button>
      </div>
      <div className="text-white my-6 w-full text-center">
        ----------OR-------------
      </div>
      <div className="">
        {/* <form className=" "> */}
        <Input forId="email" forText="* Work Email" onChange={setEmail} />
        {/* <Input forId="name" forText="* Name" /> */}
        <Input
          forId="email"
          forText="* Password"
          type="password"
          onChange={setPassword}
        />
        <div className="w-full flex items-center justify-center mt-4">
          <Button_3
            text="Get started for free"
            classes=" rounded-3xl "
            onClick={async () => {
              const res = await axios.post(
                `${BACKEND_URL}/api/v1/user/signin`,
                {
                  username: email,
                  password,
                }
              );
              localStorage.setItem("token", res.data.token);
              router.push("/zap/create");
            }}
          />
        </div>
        {/* </form> */}
      </div>
    </section>
  );
};

export default SignInForm;
