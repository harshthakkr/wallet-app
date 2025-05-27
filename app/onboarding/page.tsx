"use client";

import Button from "@/components/Button";
import logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";

const Onboarding = () => {
  const [activeView, setActiveView] = useState<"create" | "login" | null>(null);

  return (
    <div className="font-excon bg-gray-950 text-gray-50 min-h-screen flex justify-center items-center">
      {activeView === null && (
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="bg-gray-50 px-8 py-4 rounded-full">
            <Image src={logo} width={200} alt="logo" />
          </span>
          <h1 className="font-author text-6xl font-extrabold">
            One Wallet. Infinite Accounts. Zyro Hassle.
          </h1>
          <p className="text-gray-400">
            Effortlessly manage multiple accounts. All from a clean, intuitive
            interface. No noise. Just what matters.
          </p>
          <div className="flex flex-col w-96 gap-4 mt-40">
            <Button
              text="Already have a wallet"
              color="bg-white text-gray-950"
              prop="login"
              setProp={setActiveView}
            />
            <Button
              text="Create a new wallet"
              color="bg-[#324ea2] text-gray-50"
              prop="create"
              setProp={setActiveView}
            />
          </div>
        </div>
      )}
      {activeView === "create" && <div>create</div>}
      {activeView === "login" && <div>login</div>}
    </div>
  );
};

export default Onboarding;
