Read in two parameters, a file containing a starter grid & the number of iterations to
apply the following rules to the starter state

The grid can be any size but must be a square number with each row seperated by a newline
character

For each cell:
  if the cell is alive, stay alive if it has 2 to 3 neighbours
  if the cell is dead, come to life if it has 3 alive neighbours
