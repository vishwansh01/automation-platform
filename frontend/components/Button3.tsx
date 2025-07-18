import React from "react";

type Props = { text: string; classes: string; onClick: () => void };

const Button_3 = ({ text, classes, onClick }: Props) => {
  return (
    <div
      className={`border-indigo-800 hover:cursor-pointer hover:border-indigo-700 p-1 w-fit border-2 ${classes}`}
    >
      <button
        className={`bg-indigo-800 text-white py-2 px-4 hover:bg-indigo-700 ${classes}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button_3;
