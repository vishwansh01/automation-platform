import Image from "next/image";
import React from "react";

const SignUpHero = () => {
  return (
    <section>
      <h1 className="text-white">
        Join millions worldwide who automate their work using Zapier.
      </h1>
      <div className="text-white">
        <Image
          src="/icons8-green-tick.png"
          alt="Green Tick"
          width={20}
          height={20}
        />
        <div>Easy setup, no coding required</div>
      </div>
      <div className="text-white">
        <Image
          src="/icons8-green-tick.png"
          alt="Green Tick"
          width={20}
          height={20}
        />
        <div>Free foreever for core features</div>
      </div>
      <div className="text-white">
        <Image
          src="/icons8-green-tick.png"
          alt="Green Tick"
          width={20}
          height={20}
        />
        <div>14-day trial of premium features & apps</div>
      </div>
    </section>
  );
};

export default SignUpHero;
