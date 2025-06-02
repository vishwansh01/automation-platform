"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button_2 from "./Button2";

const EmailSelector = ({
  setMetaData,
}: {
  setMetaData: (items: unknown) => void;
}) => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  return (
    <div className="text-black">
      <Input forId="email" forText="To" onChange={setEmail} />
      <Input forId="body" forText="Body" onChange={setBody} />
      <Button_2
        text="Submit"
        classes="rounded-lg"
        onClick={() => {
          setMetaData({
            email,
            body,
          });
        }}
      />
    </div>
  );
};

export default EmailSelector;
