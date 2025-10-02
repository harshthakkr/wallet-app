"use client";
import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import bs58 from "bs58";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { useEffect, useState } from "react";
import Keypairs from "@/components/Keypairs";
import { toast } from "sonner";

const Dashboard = () => {
  const [keypairs, setKeypairs] = useState<string[][]>([]);
  const [idx, setIdx] = useState<number>(0);

  const addWallet = () => {
    const mnemonic = localStorage.getItem("mnemonic-phrase");
    if (!mnemonic) {
      toast.error("Mnemonic phrase not found");
      return;
    }
    const seed = mnemonicToSeedSync(mnemonic);
    const path = `m/44'/501'/${idx}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const secretKeyBase58 = bs58.encode(secretKey);
    const pubKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58();
    setKeypairs((prev) => [...prev, [pubKey, secretKeyBase58]]);
    setIdx((prev) => prev + 1);
  };

  useEffect(() => {
    addWallet();
  }, []);

  return (
    <div className="font-excon min-h-screen px-48 py-32 bg-gray-950 text-white">
      <div className="">
        <h1 className="font-author text-5xl font-semibold mb-8">
          Solana Wallet
        </h1>
        <div className="flex flex-col gap-6">
          {keypairs.length > 0 &&
            keypairs.map((keypair, i) => (
              <div key={i}>
                <Keypairs sequence={i + 1} keypair={keypair} />
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={addWallet}
            className="bg-blue-600 mt-4 rounded-xl px-4 py-2"
          >
            Add a wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
