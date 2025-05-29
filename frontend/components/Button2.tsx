import React from "react";

type Props = { text: string; classes: string; onClick: () => void };

const Button_2 = ({ text, classes, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-blue-600 hover:bg-blue-700 m-2 py-2 px-4 ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button_2;
