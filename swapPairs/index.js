var swapPairs = function (head) {
  // Base case: 0 or 1 node
  if (!head || !head.next) return head;

  // New head will be the second node
  let newHead = head.next;

  // Previous node to link swapped pairs
  let prev = null;
  let current = head;

  while (current && current.next) {
    let first = current;
    let second = current.next;
    let nextPair = second.next;

    // Swap the pair
    second.next = first;
    first.next = nextPair;

    // Connect with the previous pair
    if (prev) {
      prev.next = second;
    }

    // Move to the next pair
    prev = first;
    current = nextPair;
  }

  return newHead;
};