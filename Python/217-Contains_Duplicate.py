#  -----------  PYTHON 3  -----------
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # O(n) time | O(n) space 
        # n -> size of nums

        # Initialize set
        hashset = set()
        
        # Iterate nums
        for n in nums:
            # if the current number is already on the set RETURN TRUE (finish)
            if n in hashset: return True
            # if nothing is returned we add the current number to the set
            hashset.add(n)
        
        # if the previous for loop did not return true
        # then nums do not have any duplicates
        return False