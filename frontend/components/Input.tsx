import React from "react";

type Props = { forId: string; forText: string; type?: string };

const Input = ({ forId, forText, type }: Props) => {
  return (
    <div>
      <div className="flex flex-col">
        <label
          className="text-white font-bold text-xs my-2"
          htmlFor={`${forId}`}
        >
          {forText}
        </label>
        <input
          id={forId}
          type={!type ? `text` : type}
          className="border-black hover:border-gray-700 hover:bg-slate-100 border-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default Input;
