const moveZeroes = (values) => {
  const zero = [];
  const order = [];
  
  for(let i = 0; i < values.length; i++){
      if(values[i] === 0){
          zero.push(values[i])
      }else{
        order.push(values[i])  
      }
  }
  return order.concat(zero)
}

// filter

// const moveZeroes = (values) => {
//   const nonZero = values.filter(val => val !== 0);
//   const zeroes = values.filter(val => val === 0);
//   return [...nonZero, ...zeroes];
// };

/////////////////  a one-liner:
// const moveZeroes = arr => [...arr.filter(n => n !== 0), ...arr.filter(n => n === 0)];


  
  
console.log(moveZeroes([0,1,0,3,12]))