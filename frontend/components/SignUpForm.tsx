"use client";
import React, { useState } from "react";
import GoogleLogo from "./GoogleLogo";
import Input from "./Input";
import Button_3 from "./Button3";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <section className="flex flex-col">
      <div className="">
        <button className="bg-white px-4 hover:bg-slate-200 gap-4 border-black h-fit flex items-center w-[20vw] justify-center py-2 rounded-md font-bold">
          <GoogleLogo classes="w-4" />
          <div>Start free with Google</div>
        </button>
      </div>
      <div className="text-white my-6 w-full text-center">
        ------------OR-------------
      </div>
      <div className="">
        <form className=" ">
          <Input forId="email" forText="* Work Email" onChange={setEmail} />
          <Input forId="name" forText="* Name" onChange={setName} />
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
                  `${BACKEND_URL}/api/v1/user/signup`,
                  {
                    username: email,
                    password,
                    name,
                  }
                );
                if (res.data) router.push("/login");
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
