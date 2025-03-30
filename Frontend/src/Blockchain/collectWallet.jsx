import { getWeb3 } from "./web3Config";

export const connectWallet = async (setAccount) => {
    const web3 = await getWeb3();
    if (!web3) return;
    
    try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]); // Update the state with the connected account
        return accounts[0];
    } catch (error) {
        console.error("Wallet connection error:", error);
        return null;
    }
};
