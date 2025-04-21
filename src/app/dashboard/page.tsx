"use client"
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function Page() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-4">Welcome, {user?.username}!</p>
        DASHBOARD
      </div>
    </div>
  )
}


