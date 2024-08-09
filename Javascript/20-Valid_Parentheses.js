// ---------- JAVASCRIPT ----------
var isValid = function (s) {
  // O(n) time | O(n) space -> n = s.length

  // Hashmap for parentheses pairs
  const closedParentheses = {
    "}": "{",
    ")": "(",
    "]": "[",
  }; // O(1) space

  const stack = []; // O(n) space

  // O(n) time
  for (const c of s) {
    // If the character is an open parenthesis, push it to the stack
    if (!(c in closedParentheses)) stack.push(c);
    // If the character is a closed parenthesis, check if the last element in the stack is the corresponding open parenthesis
    else if (stack[stack.length - 1] === closedParentheses[c]) stack.pop();
    // If the last element in the stack is not the corresponding open parenthesis, return false
    // This is because the string is invalid if the last element in the stack is not the corresponding open parenthesis
    else return false;
  }

  // If the stack is empty, the string is valid because all parentheses have been closed
  return stack.length === 0;
};
