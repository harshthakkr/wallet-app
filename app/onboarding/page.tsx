"use client";

import Button from "@/components/Button";
import { generateMnemonic } from "bip39";
import logo from "@/public/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import WordChoiceButton from "@/components/WordChoiceButton";
import SecondaryHeader from "@/components/SecondaryHeader";
import OnboardingButton from "@/components/OnboardingButton";
import Description from "@/components/Description";
import InputPhrase from "@/components/InputPhrase";
import CreatePhrase from "@/components/CreatePhrase";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";

const Onboarding = () => {
  const [activeView, setActiveView] = useState<"create" | "login" | null>(null);
  const [is12Words, setIs12Words] = useState<boolean>(true);
  const [mnemonicArr, setMnemonicArr] = useState<string[]>([]);
  const [phraseInput, setPhraseInput] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
    localStorage.setItem("mnemonic-phrase", mnemonicArr.join(" "));
  };

  useEffect(() => {
    if (activeView === "create") {
      const mnemonic = generateMnemonic(is12Words ? 128 : 256);
      console.log(mnemonic);
      setMnemonicArr(mnemonic.split(" "));
    }
    if (activeView === "login") {
      setPhraseInput(new Array(is12Words ? 12 : 24).fill(""));
    }
  }, [activeView, is12Words]);

  return (
    <div className="font-excon bg-gray-950 text-gray-50 min-h-screen flex justify-center items-center">
      {activeView === null && (
        <div className="flex flex-col gap-4 items-center">
          <span className="bg-gray-50 px-8 py-4 rounded-full">
            <Image src={logo} width={200} alt="logo" />
          </span>
          <h1 className="font-author text-6xl font-extrabold">
            One Wallet. Infinite Accounts. Zyro Hassle.
          </h1>
          <Description
            text="Effortlessly manage multiple accounts. All from a clean, intuitive
            interface. No noise. Just what matters."
          />
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
        <div>
          <BackButton setProp={setActiveView} />
          <div className="flex flex-col gap-4 items-center">
            <SecondaryHeader text="Your secret recovery phrase" />
            <div className="flex gap-x-1">
              <WordChoiceButton
                prop={true}
                setProp={setIs12Words}
                curr={is12Words}
                text="Use 12 words"
              />
              <WordChoiceButton
                prop={false}
                setProp={setIs12Words}
                curr={is12Words}
                text="Use 24 words"
              />
            </div>
            <CreatePhrase mnemonicArr={mnemonicArr} />
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="checkbox"
                onChange={() => setIsChecked(!isChecked)}
                className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-[#4263c5] rounded-sm bg-white mt-1 checked:bg-[#324ea2] checked:border-0"
              />
              <label htmlFor="checkbox">
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
            <OnboardingButton
              text="Next"
              isChecked={isChecked}
              onclick={handleClick}
            />
          </div>
        </div>
      )}
      {activeView === "login" && (
        <div>
          <BackButton setProp={setActiveView} />
          <div className="flex flex-col gap-4 items-center">
            <div>
              <SecondaryHeader text="Your secret recovery phrase" />
              <Description text="Enter your phrase" />
            </div>
            <div>
              <WordChoiceButton
                prop={true}
                setProp={setIs12Words}
                curr={is12Words}
                text="Use 12 words"
              />
              <WordChoiceButton
                prop={false}
                setProp={setIs12Words}
                curr={is12Words}
                text="Use 24 words"
              />
            </div>
            <InputPhrase prop={phraseInput} setProp={setPhraseInput} />
            <OnboardingButton
              text="Import"
              isChecked={true}
              onclick={handleClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
