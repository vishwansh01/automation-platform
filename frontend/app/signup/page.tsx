import SignNavBar from "@/components/SignNav";
import SignUpForm from "@/components/SignUpForm";
import SignHero from "@/components/SignUpHero";
import React from "react";

const Page = () => {
  return (
    <main>
      <SignNavBar />
      <section className="flex flex-row gap-52 h-screen justify-center items-center">
        <SignHero />
        <SignUpForm />
      </section>
    </main>
  );
};

export default Page;
