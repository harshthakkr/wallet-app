"use client";

import Button from "@/components/Button";
import Phrases from "@/components/Phrases";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import logo from "@/public/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChooseWordsButton from "@/components/ChooseWordsButton";

const Onboarding = () => {
  const [activeView, setActiveView] = useState<"create" | "login" | null>(null);
  const [mnemonicArr, setMnemonicArr] = useState<string[]>([]);
  const [is12Words, setIs12Words] = useState(true);

  useEffect(() => {
    if (activeView === "create") {
      const mnemonic = generateMnemonic(is12Words ? 128 : 256);
      setMnemonicArr(mnemonic.split(" "));
      const seed = mnemonicToSeedSync(mnemonic);
    }
  }, [activeView, is12Words]);

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
      {activeView === "create" && (
        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-author text-4xl font-semibold mb-4">
            Your secret phrase
          </h2>
          <div className="flex gap-x-1">
            <ChooseWordsButton
              prop={true}
              setProp={setIs12Words}
              curr={is12Words}
              text="Use 12 words"
            />
            <ChooseWordsButton
              prop={false}
              setProp={setIs12Words}
              curr={is12Words}
              text="Use 24 words"
            />
          </div>
          <Phrases mnemonicArr={mnemonicArr} />
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="some_id"
              className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-[#4263c5] rounded-sm bg-white mt-1 checked:bg-[#324ea2] checked:border-0"
            />
            <label htmlFor="some_id">
              Make sure to save it at some safe place
            </label>
            <svg
              className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <button className="bg-[#324ea2] px-8 py-4 rounded-2xl font-medium">
            Proceed
          </button>
        </div>
      )}
      {activeView === "login" && <div>login</div>}
    </div>
  );
};

export default Onboarding;
