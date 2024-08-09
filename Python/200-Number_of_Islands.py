# ---------- PYTHON 3 ----------
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # O(RC) time | O(RC) space
        # R -> rows, C -> columns
        count = 0
    # We need to have a visited set to avoid checking coordinates that we already visited
        visited = set() # O(RC) space
        
        for row in range(0, len(grid)): # O(R) time
            for col in range(0, len(grid[0])): # O(C) time
                # For each grid cell explore to find and count islands
                count += self.explore(row, col, grid, visited)
        return count
    
    def explore(self, row, col, grid, visited):
        # Check if the current coordinates are in the grid bounds if not RETURN 0
        if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]): return 0
        # If the current coordinates are water RETURN 0
        if grid[row][col] == "0": return 0
        # If these coordinates have already been visited RETURN 0
        if (row, col) in visited: return 0
        # Add the current coordinates to the visited set to not re-explore them
        visited.add((row,col))
                
    # If the code executes at this point it means that we are in an unexplored land, to 
    # explore the entire island we need to explore its adjacent cells
        self.explore(row + 1, col, grid, visited) # UP
        self.explore(row - 1, col, grid, visited) # BOTTOM
        self.explore(row, col + 1, grid, visited) # RIGHT
        self.explore(row, col - 1, grid, visited) # LEFT
    # Entire island explored RETURN 1 to add one explored island to our count
        return 1
    
      