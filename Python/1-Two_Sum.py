# ---------- PYTHON 3 --------
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # O(n) time | O(n) space

        # Hashmap to store numbers and their indexes
        # { number: index }
        storage = {} # O(n) space
        
        for i in range(len(nums)): # O(n) time
            # complement -> Number needed to add to current 
            # element to reach the target
            complement = target - nums[i]
            
            # If the complement is in the storage we can add up to
            # target -> RETURN indexes
            if complement in storage:
                return [storage[complement], i]
            
            # Store current element with his index
            storage[nums[i]] = i       