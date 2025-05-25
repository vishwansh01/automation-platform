import React from "react";
import Button_2 from "./Button2";
import GoogleLogo from "./GoogleLogo";
import { TiTick } from "react-icons/ti";

const Hero = () => {
  return (
    <section className="mt-28">
      {/* <h1 className="font-inter bg-gradient-to-r from-blue-400 to-white text-5xl"></h1> */}
      <div className="bg-gradient-to-r from-blue-600 to-white text-transparent bg-clip-text relative">
        <h1 className="font-inter text-center font-semibold text-5xl">
          Turn every keystroke
          <br />
          into action
        </h1>
      </div>
      <div className="text-center my-6 flex items-center w-full justify-center">
        <div className="text-lg text-white w-1/2">
          Unleash the power of AI with the magic of Fluint. Together, they
          transform your ideas into smart workflows and powerful bots — working
          seamlessly, so you don&apos;t have to.
        </div>
      </div>
      <div className="m-auto flex justify-center items-center w-1/2 gap-4 flex-row">
        {/* <div> */}

        <Button_2
          text="Start free with email"
          classes="text-md h-fit rounded-3xl font-bold flex-1"
        />
        {/* </div> */}
        <button className="bg-white flex-1 gap-4 border-black h-fit flex items-center justify-center py-2 rounded-3xl font-bold">
          <GoogleLogo classes="w-4" />
          <div>Start free with Google</div>
        </button>
      </div>
      <div>
        <TiTick className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
