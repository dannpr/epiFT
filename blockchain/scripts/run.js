// using DynamicNFT contract use : https://www.svgviewer.dev/ to see the svg image
const main = async () => {
    // compile and generate the necessary files
    const nftContractFactory = await hre.ethers.getContractFactory('DynamicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to :", nftContract.address);

    let txn = await nftContract.makeAnDynamicNFT()
    await txn.wait()

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();