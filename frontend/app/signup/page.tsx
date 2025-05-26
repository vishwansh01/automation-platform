import SignNavBar from "@/components/SignNav";
import SignUpForm from "@/components/SignUpForm";
import SignUpHero from "@/components/SignUpHero";
import React from "react";

const Page = () => {
  return (
    <main>
      <SignNavBar />
      <section>
        <SignUpHero />
        <SignUpForm />
      </section>
    </main>
  );
};

export default Page;
