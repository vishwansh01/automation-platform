import React from "react";

type Props = { text: string; classes: string; onClick: () => void };

const Button_1 = ({ text, classes, onClick }: Props) => {
  return (
    <button
      className={`text-white hover:underline m-2 ${classes}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button_1;
