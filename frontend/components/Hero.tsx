import React from "react";
import Button_2 from "./Button2";
import GoogleLogo from "./GoogleLogo";
import Image from "next/image";

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
        <button className="bg-white hover:bg-slate-200 flex-1 gap-4 border-black h-fit flex items-center justify-center py-2 rounded-3xl font-bold">
          <GoogleLogo classes="w-4" />
          <div>Start free with Google</div>
        </button>
      </div>
      <div>
        <div className="text-white text-xs flex flex-row items-center justify-center gap-4">
          <div className="flex flex-row gap-1 items-center justify-center">
            <Image src="/icons8-tick.png" alt="GG" width={15} height={15} />
            <div>
              <b>Free forever </b>
              for core features
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <Image src="/icons8-tick.png" alt="GG" width={15} height={15} />
            <div>
              <b>More apps </b>
              than any other platform
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <Image src="/icons8-tick.png" alt="GG" width={15} height={15} />
            <div>
              Cutting edge <b>AI features</b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-20 opacity-75">
        <Image
          src="/logo.png"
          alt="logo"
          width={900}
          height={100}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
