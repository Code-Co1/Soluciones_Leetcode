# ---------- PYTHON 3 ----------
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # O(n*2^n) time | O(n*2^n) space
        # 2^n -> Generate subsets
        # n -> Copy them into output list
        res = []
        # Current subset
        subset = [] # O(n*2^n) space

        # Depth First Search function to generate subsets
        def dfs(i):
            # If i is out of range add current subset to res
            if(i == len(nums)):
                # Be careful to not push the subset array reference to res
                # copy the array instead
                res.append(subset[:]) # O(n) time - Copy into output array
                return
            
            # O(2^n) time - Generate subsets
            # Decision to include nums[i]
            subset.append(nums[i])
            dfs(i + 1)
            
            # Decision to NOT include nums[i] and continue with next num
            subset.pop()
            dfs(i + 1)

        # Call dfs with first nums index
        dfs(0)
        return res

