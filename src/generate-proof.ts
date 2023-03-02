import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
import { argv } from "process";

// Load the tree from the description that was generated previously.
const tree = StandardMerkleTree.load(
  JSON.parse(fs.readFileSync("tree.json", "utf-8"))
);

for (const [i, v] of tree.entries()) {
  const [, , index, address] = argv;

  if (v[index] === address) {
    // Generate the proof using the index of the entry.
    const proof = tree.getProof(i);
    console.log("Value:", v);
    console.log("Proof:", proof);
  }
}
