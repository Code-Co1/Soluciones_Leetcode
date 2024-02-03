// ---------- JAVASCRIPT ----------
var twoSum = function (nums, target) {
  // O(n) time | O(n) space

  // Hashmap to store numbers and their indexes
  const storage = {}; // O(n) space

  for (let i = 0; i < nums.length; i++) {
    // O(n) time
    // complement -> Number needed to add to current
    // element to reach the target
    const complement = target - nums[i];
    // If the complement is in the storage we can reach the
    // target -> RETURN indexes
    if (complement in storage) return [storage[complement], i];

    // Store current element with his index
    storage[nums[i]] = i;
  }
};
