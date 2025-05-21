const intersection = (num1, num2) => {
  const set1 = new Set(num1);
  const set2 = new Set(num2);
  const result = [];

  for(let num of num1){
    if(set2.has(num)){
      result.push(num);
    }
  }

  return result;
}

intersection([1, 2, 2, 1], [2, 2]); // Output: [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]); // Output: [4, 9]