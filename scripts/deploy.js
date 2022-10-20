
const hre = require("hardhat");

async function main() {
//connecting the contract 
  const ViewAddress = await hre.ethers.getContractFactory("View");
  const View = await ViewAddress.deploy();
  await View.deployed();
//console.logging the value
  console.log("VotingContract deployed to:", View.address);

  const address = await View.viewOwner();
  console.log(`the address of the person that deployed is` , address);

  //operations
//statevariables

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
