import React, { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import axios from "axios";

const bApp = import.meta.env.VITE_PUBLIC_API_URL;
const WalletConnect = () => {
  const { walletAddress, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [status, setStatus] = useState("");

  const loginWithWallet = async () => {
    try {
      // Step 1: Get nonce from backend
      const { data } = await axios.post(`${bApp}/api/auth/nonce`, {
        walletAddress,
      });

      const nonce = data.nonce;
      const message = `Sign this message to login. Nonce: ${nonce}`;

      // Step 2: Sign message
      const signature = await signMessageAsync({ message });

      // Step 3: Send signature back to backend
      const res = await axios.post(`${bApp}/api/auth/verify`, {
        walletAddress,
        signature,
      });

      setStatus("✅ Logged in as " + res.data.walletAddress);
    } catch (err) {
      console.error(err);
      setStatus("❌ Login failed");
    }
  };

  return (
    <div className="text-center my-4">
      {isConnected ? (
        <>
          <p>
            Connected wallet: <strong>{address}</strong>
          </p>
          <button className="btn btn-success" onClick={loginWithWallet}>
            Login with Signature
          </button>
        </>
      ) : (
        <w3m-button />
      )}
      <p className="mt-3">{status}</p>
    </div>
  );
};

export default WalletConnect;
