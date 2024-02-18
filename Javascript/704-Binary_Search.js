// ---------- JAVASCRIPT ----------
var search = function (nums, target) {
  // O(log(n)) time | O(1) space

  // Initialize left pointer at start of nums
  let left = 0;
  // Initialize right pointer at the end of nums
  let right = nums.length - 1;

  // < is used to avoid the left pointer surpassing the right pointer
  // = is used to check the case where the right and left pointers match
  // e.g nums = [5] target = 5 or nums = [1,2,3] target = 1 | 3
  while (left <= right) {
    // Find mid index between the left and right pointers
    const mid = Math.floor((left + right) / 2);

    // If the value in the mid index is the target RETURN mid
    if (nums[mid] === target) return mid;
    // If the value in the mid index is bigger than the target move the
    // right pointer to mid - 1 to discard half of the remaining options
    // (the right part) this only discards bigger values than the target
    else if (nums[mid] > target) right = mid - 1;
    // If the value in the mid index is smaller than the target move the
    // left pointer to mid + 1 to discard half of the remaining options
    // (the left part) this only discards smaller values than the target
    else left = mid + 1;
  }

  // If nothing was returned from the while loop then the target was not found
  return -1;
};
