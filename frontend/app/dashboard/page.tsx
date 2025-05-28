"use client";
import NavBar from "@/components/NavBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import Button_3 from "@/components/Button3";

type Props = {};

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionID: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
    };
  };
}

function useZap() {
  const [loading, setLoading] = useState(true);
  const [zaps, setZaps] = useState<Zap[]>();
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/zap`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setZaps(res.data.zaps);
      });
  }, []);
  return { loading, zaps };
}

const Page = (props: Props) => {
  const [loading, zaps] = useZap();
  return (
    <main>
      <NavBar />
      <section>
        <h1>My Fluients</h1>
        <Button_3 text="Create" classes="" onClick={() => {}} />
      </section>
    </main>
  );
};

export default Page;
