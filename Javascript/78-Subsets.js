// ---------- JAVASCRIPT ----------
var subsets = function (nums) {
  // O(n*2^n) time | O(n*2^n) space
  // 2^n -> Generate subsets
  // n -> Copy them into output list
  let res = [];
  // Current subset
  let subset = [];

  // Depth First Search function to generate subsets
  let dfs = (i) => {
    // If i is out of range add current subset to res
    if (i === nums.length) {
      // Be careful to not push the subset array reference to res
      // copy the array instead
      res.push([...subset]); // O(n) time - Copy into output array
      return;
    }

    // O(2^n) time - Generate subsets
    // Decision to include nums[i]
    subset.push(nums[i]);
    dfs(i + 1);

    // Decision to NOT include nums[i] and continue with next num
    subset.pop();
    dfs(i + 1);
  };

  // Call dfs with first nums index
  dfs(0);
  return res;
};
