import Image from "next/image";
import React from "react";

type Props = {
  name?: string;
  index: number;
  onClick: () => void;
  image?: string;
};

const ZapCell = ({ name, index, onClick, image }: Props) => {
  console.log(image);
  return (
    <div
      className="flex hover:bg-slate-100 gap-2 px-4 min-w-72 min-h-20 items-center justify-center flex-row bg-white border-black border-2 m-2"
      onClick={onClick}
    >
      <div className="font-extrabold">{index}.</div>
      {image && (
        <div>
          <Image
            src={image}
            alt="ww"
            width={40}
            height={40}
            className="rounded-md"
          />
        </div>
      )}
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default ZapCell;
