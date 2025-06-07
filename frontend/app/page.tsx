// import Image from "next/image";
"use client";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const res = await fetch(
          "http://localhost:3001/api/v1/user/verify-token",
          {
            method: "GET",
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
  return (
    <div className="">
      <NavBar isAuthenticated={isAuthenticated} />
      <Hero isAuthenticated={isAuthenticated} />
    </div>
  );
}
