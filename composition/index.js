// Composition Polyfill


function addFive(a){
  return a + 5;
}

function substractTwo(a){
  return a - 2;
}

function mutiplyFour(a){
  return a * 4;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg) ,args);
  }
}

const evelution = compose(addFive, substractTwo, mutiplyFour);

console.log("evelution", evelution(5));
