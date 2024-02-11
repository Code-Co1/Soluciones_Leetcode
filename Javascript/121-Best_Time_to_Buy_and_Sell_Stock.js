// ---------- JAVASCRIPT ----------
var maxProfit = function (prices) {
  // O(n) time | O(1) space
  let maxProfit = 0;

  // Initialize window
  // The right pointer will iterate over the entire prices array
  // The left pointer will be the start of the window and will be pointing
  // at the smallest value found by the right pointer (this to maximize profits)
  let left = 0;
  for (let right = 0; right < prices.length; right++) {
    // O(n) time

    // Check the profit of current window (prices[right] - smallest value found)
    // and update maxProfit if the current window profit is bigger than maxProfit
    maxProfit = Math.max(maxProfit, prices[right] - prices[left]);

    // The only way to find bigger profits is to find smaller left pointer values

    // If the right pointer finds a smaller value move the left pointer
    // to the right pointer index
    if (prices[right] <= prices[left]) left = right;
  }

  // Return the maximum profit registered
  return maxProfit;
};
