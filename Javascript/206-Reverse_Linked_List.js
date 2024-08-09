// ---------- JAVASCRIPT ----------
// ListNode = { next: (next===undefined ? null : next), val: (val===undefined ? 0 : val) }
var reverseList = function (head) {
  // O(n) time | O(1) space -> n = number of nodes in the linked list

  // Initialize the previous node as null
  let prev = null;
  // Initialize the current node as the head of the linked list
  // This is the node we are currently reversing
  // We will start from the head and move to the tail
  let current = head;

  // O(n) time
  // While the current node is not null (i.e., we have not reached the end of the linked list)
  while (current) {
    // Save the next node
    const next = current.next;
    // Reverse the current node
    current.next = prev;
    // Move to the next node
    prev = current;
    current = next;
  }

  // Return the new head of the reversed linked list
  return prev;
};
