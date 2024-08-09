class Solution(object):
  def climbStairs(self, n):
    # O(n) time | O(1) space
    table = [1, 1]
    
    for i in range(2, n + 1):
        temp = table[0]
        table[0] = table[1]
        table[1] += temp
    return table[1]