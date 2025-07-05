import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const bApp = import.meta.env.VITE_PUBLIC_API_URL;

const ConnectWallet = () => {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const connectWallet = async () => {
    try {
      const isMetaMask = window.ethereum?.isMetaMask;
      // 1. Check for MetaMask
      if (!window.ethereum || !isMetaMask) {
        alert("MetaMask not found. Please install it!");
        return;
      }

      // 2. Create provider and request accounts
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const walletAddress = accounts[0];
      setWallet(walletAddress);

      // 3. Get nonce from backend
      const nonceResponse = await axios.post(`${bApp}/api/auth/nonce`, {
        walletAddress,
      });
      const nonce = nonceResponse.data.nonce;
      const message = `Sign this message to login. Nonce: ${nonce}`;

      // 4. Sign the message
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(message);

      // 5. Send signed message to backend for verification
      const verifyResponse = await axios.post(`${bApp}/api/auth/verify`, {
        walletAddress,
        signature,
      });

      setStatus(`✅ Login successful: ${verifyResponse.data.message}`);
    } catch (error) {
      console.error(error);
      setStatus("❌ Login failed. Check console.");
    }
  };

  return (
    <div className="container text-center py-5">
      <h2>Connect to SkillMint</h2>
      <button className="btn btn-success" onClick={connectWallet}>
        {wallet ? "Reconnect Wallet" : "Connect Wallet"}
      </button>
      {wallet && <p className="mt-3">Wallet: {wallet}</p>}
      <p>{status}</p>
    </div>
  );
};

export default ConnectWallet;
