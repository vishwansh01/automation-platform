"use client";
import React, { useState } from "react";
import Button_1 from "./Button1";
import Button_2 from "./Button2";
import { FRONTEND_URL } from "@/app/config";
import { useRouter } from "next/navigation";

// type Props = {};

const NavBar = ({ isAuthenticated }: { isAuthenticated: boolean | null }) => {
  const router = useRouter();
  const [features, setFeatures] = useState(false);
  return (
    <div>
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
          <Button_1
            text="Features/About"
            classes=" text-sm "
            onClick={() => {
              setFeatures(true);
            }}
          />
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
      {features && (
        <div
          className="bg-black absolute top-0 bg-opacity-55 flex items-center justify-center z-[100] text-white h-screen w-full"
          onClick={() => {
            setFeatures(false);
          }}
        >
          <div
            className="w-1/2 h-1/2 border bg-custom-gradient border-white"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="m-4">
              <h1 className="text-center font-bold">Features</h1>
              <div>• A no code automation tool</div>
              <div>
                • Provides an automated workflow that connects two or more apps
                by
                <b className="underline">providing webhooks</b>(something like
                zapier). It consists of:
                <div className="mx-2">
                  {`->`}Trigger (an event that starts the webhook, e.g.,
                  receiving a comment from github).
                </div>
                <div className="mx-2">
                  {`->`}Action (what happens next, e.g.,{` `}
                  <b className="underline">
                    sending emails or sending solana when the webhook is hit
                  </b>
                  , details of where to send will be in the body received by the
                  webhook).
                </div>
              </div>
              <div>
                • Tech stack : {` `}
                <b className="underline">
                  TypeScript, Next.js,Node.js, Express.js, Kafka, Docker
                </b>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
