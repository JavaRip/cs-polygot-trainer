import fs from "fs";

function main() {
  const startState = fs.readFileSync("../glider.txt", "utf-8");
  const numRows = getRows(startState);
  const numCols = getCols(startState);
  const numCells = numCols * numRows;

  for (let i = 0; i < numCells; i += 1) {
    console.log(`${i} of ${numCells}:${startState[i]}`);
  }
}

function getRows(startState) {
  return startState.split("\n").length; // not sure why this has 1 extra
}

function getCols(startState) {
  return startState.split("\n")[0].split("").length;
}

main();
