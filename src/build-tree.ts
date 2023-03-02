import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

const [encoding, ...leafs] = fs
  .readFileSync("values.csv", "utf-8")
  .trim()
  .split("\n");

// Build the merkle tree. Set the encoding to match the values.
const tree = StandardMerkleTree.of(
  leafs.map((leaf) => leaf.split(",")),
  encoding.split(",")
);

// Print the merkle root. You will probably publish this value on chain in a smart contract.
console.log("Merkle Root:", tree.root);

// Write a file that describes the tree. You will distribute this to users so they can generate proofs for values in the tree.
fs.writeFileSync("tree.json", JSON.stringify(tree.dump(), null, 2));
