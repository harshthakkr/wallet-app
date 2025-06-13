import Key from "./Key";

const Keypairs = ({
  sequence,
  keypair,
}: {
  sequence: number;
  keypair: string[];
}) => {
  return (
    <div className="bg-gray-800 p-8 rounded-3xl">
      <h2 className="font-author text-4xl font-medium mb-6">
        Wallet {sequence}
      </h2>
      <div className="pl-6 text-lg flex flex-col gap-6">
        <Key title="Public Key" text={keypair[0]} />
        <Key title="Private Key" text={keypair[1]} />
      </div>
    </div>
  );
};

export default Keypairs;
