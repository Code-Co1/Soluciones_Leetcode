// ---------- JAVASCRIPT ----------
var numIslands = function (grid) {
  // O(RC) time | O(RC) space
  // R -> rows, C -> columns
  let count = 0;
  // We need to have a visited set to avoid checking coordinates that we already visited
  const visited = new Set(); // O(RC) space
  for (let row = 0; row < grid.length; row++) {
    // O(R) time
    for (let col = 0; col < grid[0].length; col++) {
      // O(C) time
      // For each grid cell explore to find and count islands
      count += explore(grid, row, col, visited);
    }
  }
  return count;
};

function explore(grid, row, col, visited) {
  // Check if the current coordinates are in the grid bounds if not RETURN 0
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
    return 0;
  // If the current coordinates are water RETURN 0
  if (grid[row][col] === "0") return 0;
  // Generate a key with the current coordinates
  const key = `${row},${col}`;
  // If these coordinates have already been visited RETURN 0
  if (visited.has(key)) return 0;
  // Add the current coordinates to the visited set to not re-explore them
  visited.add(key);

  // If the code executes at this point it means that we are in an unexplored land, to
  // explore the entire island we need to explore its adjacent cells
  explore(grid, row + 1, col, visited); // UP
  explore(grid, row - 1, col, visited); // BOTTOM
  explore(grid, row, col + 1, visited); // RIGHT
  explore(grid, row, col - 1, visited); // LEFT
  // Entire island explored RETURN 1 to add one explored island to our count
  return 1;
}
