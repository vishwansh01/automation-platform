"use client";
import { Zap } from "@/app/types";
import React from "react";
import Button_1 from "./Button1";
import { useRouter } from "next/navigation";

// type Props = {};

const ZapTable = ({ zaps }: { zaps: Zap[] | undefined }) => {
  const router = useRouter();
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Edit</th>
          <th>Running</th>
        </tr>
      </thead>
      <tbody>
        {zaps &&
          zaps.map((zap) => (
            <div key={zap.id}>
              <td>
                {zap.trigger.type.name}{" "}
                {zap.actions.map((action) => action.type.name + " ")}
              </td>
              <td>{zap.id}</td>
              <td>Nov 13, 1961</td>
              <td>
                <Button_1
                  classes=""
                  text="Go"
                  onClick={() => {
                    router.push("/zap/" + zap.id);
                  }}
                />
              </td>
            </div>
          ))}
      </tbody>
    </table>
  );
};

export default ZapTable;
