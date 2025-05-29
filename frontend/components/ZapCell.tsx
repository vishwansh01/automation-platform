import React from "react";

type Props = { name?: string; index: number; onClick: () => void };

const ZapCell = ({ name, index, onClick }: Props) => {
  return (
    <div
      className="flex hover:bg-slate-100 px-4 min-w-56 items-center justify-center flex-row bg-white py-4 border-black border-2 m-2"
      onClick={onClick}
    >
      <div className="font-extrabold mx-2">{index}.</div>
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default ZapCell;
