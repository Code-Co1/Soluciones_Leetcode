var climbStairs = function (n) {
  // O(n) time | O(1) space
  const pair = [1, 1];

  for (let i = 2; i <= n; i++) {
    const temp = pair[0];
    pair[0] = pair[1];
    pair[1] += temp;
  }

  return pair[1];
};
