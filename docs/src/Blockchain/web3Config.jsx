import Web3 from "web3";
import contractABI from "./contractABI";

const contractAddress = "0x3BD9C9EF3FaaFd734d730A85496C782269f202D3"; // Your Smart Contract Address

export const getWeb3 = async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        return web3;
    } else {
        alert("MetaMask is required!");
        return null;
    }
};

export const getContract = async () => {
    const web3 = await getWeb3();
    if (!web3) return null;
    return new web3.eth.Contract(contractABI, contractAddress);
};
