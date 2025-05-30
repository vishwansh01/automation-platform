"use client";
import { Zap } from "@/app/types";
import React from "react";
import Button_1 from "./Button1";
import { useRouter } from "next/navigation";
import { HOOK_URL } from "@/app/config";
import Image from "next/image";

// type Props = {};

const ZapTable = ({ zaps }: { zaps: Zap[] | undefined }) => {
  const router = useRouter();
  return (
    <table className="w-full my-4">
      <thead className="border-b-2">
        <tr className="">
          <th className="text-center">Name</th>
          <th>Id</th>
          <th>Created At</th>
          <th>Webhook</th>
          <th>Running</th>
        </tr>
      </thead>
      <tbody>
        {zaps &&
          zaps.map((zap) => (
            <tr key={zap.id} className="border-b-white text-[#d6cfcf] border-b">
              <td className="text-center flex flex-row flex-wrap">
                <Image
                  src={zap.trigger.type.image}
                  width={30}
                  height={30}
                  alt="img"
                />{" "}
                {zap.actions.map((action) => (
                  <Image
                    src={action.type.image}
                    width={30}
                    height={30}
                    alt="img"
                    key={action.id}
                  />
                ))}
              </td>
              <td className="text-center">{zap.id}</td>
              <td className="text-center">Nov 13, 1961</td>
              <td className="text-center">{`${HOOK_URL}/hooks/catch/1/${zap.id}`}</td>
              <td className="text-center">
                <Button_1
                  classes=""
                  text="Go"
                  onClick={() => {
                    router.push("/zap/" + zap.id);
                  }}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ZapTable;
