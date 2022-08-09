import fs from "fs";

async function main() {
  const input = fs.readFileSync("../glider.txt", "utf-8");
  const startState = input.replaceAll("\n", "");
  const numRows = getRows(input);
  const numCols = getCols(input);
  const numCells = numCols * numRows;

  let state = startState;
  for (let i = 0; i < 1000; i += 1) {
    console.clear();
    console.log(formatState(state, numCols));

    let nextState = '';

    for (let j = 0; j < state.length; j += 1) {
      const numNeighbours = getNumNeighbours(state, j, numCols);

      nextState += getNextCell(state[j], numNeighbours);
    }
    state = nextState;
    await sleep(100);
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getNextCell(cell, numNeighbours) {
  if (cell === 'X') {
    if (numNeighbours >= 2 && numNeighbours <= 3) return 'X';
    else return '-';
  } else {
    if (numNeighbours === 3) return 'X';
    else return '-';
  }
}

function formatState(state, numCols) {
  let retVal = '';
  for (let i = 0; i < state.length; i += 1) {
    if (i % numCols === 0) retVal += "\n";
    retVal += state[i];
  }

  return retVal;
}

function getNumNeighbours(cells, index, numCols) {
  let neighbourCount = 0;

  // top
  if (cells[index - numCols] === 'X') {
    neighbourCount += 1;
  }
  // top right
  if ((index + 1) % numCols !== 0 && cells[index - numCols + 1] === 'X') {
    neighbourCount +=1;
  }
  // right
  if ((index + 1) % numCols !== 0 && cells[index + 1] === 'X') {
    neighbourCount += 1;
  }
  // bottom right
  if ((index + 1) % numCols !== 0 && cells[index + numCols + 1] === 'X') {
    neighbourCount += 1;
  }
  // bottom
  if (cells[index + numCols] === 'X') {
    neighbourCount += 1;
  }
  // bottom left
  if (index % numCols !== 0 && cells[index + numCols - 1] === 'X') {
    neighbourCount += 1;
  }
  // left
  if (index % numCols !== 0 && cells[index - 1] === 'X') {
    neighbourCount += 1;
  }
  // top left
  if (index % numCols !== 0 && cells[index - numCols - 1] === 'X') {
    neighbourCount += 1;
  }

  return neighbourCount;
}

function getRows(input) {
  return input.split("\n").length - 1; // not sure why this has 1 extra
}

function getCols(input) {
  return input.split("\n")[0].split("").length;
}

main();
