class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    return this.items.length; // Return new size
  }

  pop() {
    return this.items.length === 0 ? undefined : this.items.pop();
  }

  peek() {
    return this.items.length === 0 ? undefined : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
console.log(stack.peek());   // 20
console.log(stack.pop());    // 20
console.log(stack.size());   // 1
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true