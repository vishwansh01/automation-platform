import React from "react";

type Props = { forId: string; forText: string };

const Input = ({ forId, forText }: Props) => {
  return (
    <div>
      <div className="flex flex-col">
        <label className="text-white font-bold text-xs" htmlFor={`${forId}`}>
          {forText}
        </label>
        <input
          id={forId}
          type="text"
          className="border-black hover:border-gray-700 border-2 rounded-sm"
        />
      </div>
    </div>
  );
};

export default Input;
