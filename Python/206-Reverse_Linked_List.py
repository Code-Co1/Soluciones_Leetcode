# ---------- PYTHON 3 ----------
# ListNode = { next: (next===undefined ? None : next), val: (val===undefined ? 0 : val) }
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
      # O(n) time | O(1) space -> n = number of nodes in the linked list

      # Initialize the previous node as None
      prev = None
      # Initialize the current node as the head of the linked list
      # This is the node we are currently reversing
      # We will start from the head and move to the tail
      current = head

      # O(n) time
      # While the current node is not None (i.e., we have not reached the end of the linked list)
      while current:
        # Save the next node
        next = current.next
        # Reverse the current node
        current.next = prev
        # Move to the next node
        prev = current
        current = next
      
      # Return the new head of the reversed linked list
      return prev