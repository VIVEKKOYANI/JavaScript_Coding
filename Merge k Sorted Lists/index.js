class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.heap.sort((a, b) => a.val - b.val); // sort based on value
  }

  pop() {
    return this.heap.shift(); // remove smallest
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const heap = new MinHeap();

  // Push the head of each list to the heap
  for (let node of lists) {
    if (node) heap.push(node);
  }

  const dummy = new ListNode(0);
  let current = dummy;

  while (!heap.isEmpty()) {
    const smallest = heap.pop();
    current.next = smallest;
    current = current.next;
    if (smallest.next) {
      heap.push(smallest.next);
    }
  }

  return dummy.next;
};


const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const result = mergeKLists([list1, list2, list3]);

// Output should be: 1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
