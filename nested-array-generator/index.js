const inorderTraversal = (arr) => {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield * inorderTraversal(item);
    } else {
      yield item;
    }
  }
}

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 