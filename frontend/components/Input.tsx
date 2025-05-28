import React from "react";

type Props = {
  forId: string;
  forText: string;
  type?: string;
  onChange: (e: string) => void;
};

const Input = ({ forId, forText, type, onChange }: Props) => {
  return (
    <div>
      <div className="flex flex-col hover:bg-hovInput">
        <label
          className="text-white font-bold text-sm my-2"
          htmlFor={`${forId}`}
        >
          {forText}
        </label>
        <input
          id={forId}
          type={!type ? `text` : type}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className="border-black hover:border-gray-700 h-[5vh] hover:bg-slate-100 border-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default Input;
