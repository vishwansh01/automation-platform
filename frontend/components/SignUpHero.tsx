import Image from "next/image";
import React from "react";

const SignHero = () => {
  return (
    <section className="w-fit">
      <h1 className="text-white font-inter text-3xl font-bold w-72 tracking-wide m-4">
        Join millions worldwide who automate their work using Fluint.
      </h1>
      <div className="mx-2 w-fit">
        <div className="text-white flex flex-row gap-2 font-light m-2">
          <Image
            src="/icons8-green-tick.png"
            alt="Green Tick"
            width={20}
            height={20}
          />
          <div>Easy setup, no coding required</div>
        </div>
        <div className="text-white flex flex-row gap-2 font-light m-2">
          <Image
            src="/icons8-green-tick.png"
            alt="Green Tick"
            width={20}
            height={20}
          />
          <div>Free foreever for core features</div>
        </div>
        <div className="text-white flex flex-row gap-2 font-light m-2">
          <Image
            src="/icons8-green-tick.png"
            alt="Green Tick"
            width={20}
            height={20}
          />
          <div>14-day trial of premium features & apps</div>
        </div>
      </div>
    </section>
  );
};

export default SignHero;
