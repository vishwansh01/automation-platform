import React from "react";

type Props = { text: string; classes: string };

const Button_1 = ({ text, classes }: Props) => {
  return (
    <button className={`text-white hover:underline m-2 ${classes}`}>
      {text}
    </button>
  );
};

export default Button_1;
