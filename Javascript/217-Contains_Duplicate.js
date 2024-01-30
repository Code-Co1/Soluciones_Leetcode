//  -----------  JAVASCRIPT  -----------
var containsDuplicate = function (nums) {
  // O(n) time | O(n) space
  // n -> size of nums

  // Initialize set
  const values = new Set();

  // Iterate nums
  for (const num of nums) {
    // if the current number is already on the set RETURN TRUE (finish)
    if (values.has(num)) return true;
    // if nothing is returned we add the current number to the set
    values.add(num);
  }

  // if the previous for loop did not return true
  // then nums do not have any duplicates
  return false;
};
