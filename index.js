const { ethers } = require("ethers");
const url="https://eth-mainnet.alchemyapi.io/v2/du3QPT0e7wGfwwBSOpQl9U8_XhAMPAI8";
// Using ethers.js
const provider = new ethers.providers.JsonRpcProvider(url);
// For this, we need the account signer...
const signer = provider.getSigner();

console.log("Hello");

function circleCreate(radius){
    return {
        radius,
        draw () {
            console.log('drawing');
        }
    };
}

const circle1 = circleCreate(1);
console.log("create circle1" , circle1);

function Circle (radius){
    this.radius=radius,
    this.draw = function () {
        console.log('Construct Drawing');
        console.log(this.radius);
    }
}

const Con_Circle = new Circle(3);
Con_Circle.draw();


// Look up the current block number
async function getBlockNum (){
    const blockNumber = await provider.getBlockNumber();
    console.log(blockNumber);
    
}
// 14681280
getBlockNum();

const weiBigNumber = ethers.utils.parseEther("0.2");
const wei = weiBigNumber.toString();

console.log("wei: ", wei);
const ether = ethers.utils.formatEther(wei);
console.log(ether);

async function getBalEth (){
    const address = "0x365ff38F44da3CEEE9a6dfa37841B4a77386EFb9";
    const balanceBigNumber = await provider.getBalance(address);
    const balance = ethers.utils.formatEther(balanceBigNumber.toString());
    console.log(`user balance: ${balance} Ether`);
}

getBalEth();