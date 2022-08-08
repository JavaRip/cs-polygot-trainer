import fs from "fs";

function main() {
  const input = fs.readFileSync("../threeByThree.txt", "utf-8");
  const cells = input.replaceAll("\n", "");
  const numRows = getRows(input);
  const numCols = getCols(input);
  const numCells = numCols * numRows;

  let outStr = '';

  for (let i = 0; i < cells.length; i += 1) {
    if (i % numCols === 0) outStr += "\n";
    outStr += `${cells[i]}:${getNumNeighbours(cells, i, numCols)}`;
  }

  console.log(outStr);
}

function getNumNeighbours(cells, index, numCols) {
  let neighbourCount = 0;
  // top
  if (cells[index - numCols] === 'X') neighbourCount += 1;
  // top right
  if (cells[index - numCols + 1] === 'X') neighbourCount +=1;
  // right
  if (cells[index + 1] === 'X') neighbourCount += 1;
  // bottom right
  if (cells[index + numCols + 1] === 'X') neighbourCount += 1;
  // bottom
  if (cells[index + numCols] === 'X') neighbourCount += 1;
  // bottom left
  if (cells[index + numCols - 1] === 'X') neighbourCount += 1;
  // left
  if (cells[index - 1] === 'X') neighbourCount += 1;
  // top left
  if (cells[index - numCols - 1] === 'X') neighbourCount += 1;

  return neighbourCount;
}

function getRows(startState) {
  return startState.split("\n").length - 1; // not sure why this has 1 extra
}

function getCols(startState) {
  return startState.split("\n")[0].split("").length;
}

main();
