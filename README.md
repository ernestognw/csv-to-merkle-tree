# CSV Merkle Tree Generator

A tool for quickly converting a CSV file into a Merkle tree, which you can use for generating proofs to validate on-chain.

## Configuration

A `values.csv` file is provided with the following structure:

```
type1,type2,...,typeN
value1,value2,...,valueN
value1,value2,...,valueN
value1,value2,...,valueN
value1,value2,...,valueN
value1,value2,...,valueN
```

Where the types follow the [ethers ABI Coder types](https://docs.soliditylang.org/en/latest/abi-spec.html#types), while the format of the value is required to be consistent with its typing.

You'll be required to replace this file with the desired values.

## Getting started

To create the tree, run

```bash
npm run build:tree
```

For creating a proof for a value, run:

```bash
npm run generate:proof <typeIndex> <value>
```
