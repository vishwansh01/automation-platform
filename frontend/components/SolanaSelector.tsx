import React, { useState } from "react";
import Input from "./Input";
import Button_2 from "./Button2";

const SolanaSelector = ({
  setMetaData,
}: {
  setMetaData: (items: unknown) => void;
}) => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <div className="text-black">
        <Input forId="amount" forText="Amount" onChange={setAmount} />
        <Input forId="address" forText="Address" onChange={setAddress} />
      </div>
      <Button_2
        text="Submit"
        classes="rounded-lg"
        onClick={() => {
          setMetaData({
            amount,
            address,
          });
        }}
      />
    </div>
  );
};

export default SolanaSelector;
