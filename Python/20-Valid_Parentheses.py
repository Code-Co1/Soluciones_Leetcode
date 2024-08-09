# ---------- PYTHON 3 ----------
class Solution(object):
    def isValid(self, s):
      # O(n) time | O(n) space -> n = s.length

      # Hashmap for parentheses pairs
      closedParentheses = {
        "}": "{",
        ")": "(",
        "]": "[",
      } # O(1) space

      stack = [] # O(n) space

      # O(n) time
      for c in s:
        # If the character is an open parenthesis, push it to the stack
        if c not in closedParentheses: stack.append(c)
        # If the character is a closed parenthesis, check if the last element in the stack is the corresponding open parenthesis
        elif stack and stack[-1] == closedParentheses[c]: stack.pop()
        # If the last element in the stack is not the corresponding open parenthesis, return false
        # This is because the string is invalid if the last element in the stack is not the corresponding open parenthesis
        else: return False
      

      # If the stack is empty, the string is valid because all parentheses have been closed
      return len(stack) == 0

