import SignInForm from "@/components/SignInForm";
import SignNavBar from "@/components/SignNav";
import SignHero from "@/components/SignUpHero";
import React from "react";

const Page = () => {
  return (
    <main>
      <SignNavBar login={true} />
      <section className="flex flex-row gap-52 h-screen justify-center items-center">
        <SignHero />
        <SignInForm />
      </section>
    </main>
  );
};

export default Page;
