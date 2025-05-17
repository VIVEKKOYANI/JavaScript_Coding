const isEmpty = (obj) => {

  if(obj === null || obj === undefined) return true

  if(Array.isArray(obj)){
    return obj.length === 0;
  }

  if(typeof obj === 'object'){
    return Object.keys(obj).length === 0;
  }

  return false;

}

console.log(isEmpty({}));               // true (empty object)
console.log(isEmpty([]));               // true (empty array)
console.log(isEmpty({ a: 1 }));         // false (non-empty object)
console.log(isEmpty([1, 2, 3]));        // false (non-empty array)
console.log(isEmpty(null));            // true (null treated as empty)
console.log(isEmpty(undefined)); 