"use client";
import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import bs58 from "bs58";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { useEffect, useState } from "react";
import Keypairs from "@/components/Keypairs";

const Dashboard = () => {
  const [keypairs, setKeypairs] = useState<string[][]>([]);
  useEffect(() => {
    const mnemonic = localStorage.getItem("mnemonic-phrase");
    if (mnemonic) {
      const seed = mnemonicToSeedSync(mnemonic);
      const accounts: string[][] = [];
      for (let i = 0; i < 4; i++) {
        const path = `m/44'/501'/${i}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const secretKeyBase58 = bs58.encode(secretKey); // → string
        const pubKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58();
        accounts.push([pubKey, secretKeyBase58]);
      }
      setKeypairs(accounts);
    }
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
      </div>
    </div>
  );
};

export default Dashboard;
