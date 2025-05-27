const formLargestNumber = (arr) => {

  if(!arr || arr.length === 0) return "";

  const strArr = arr.map(String);

  strArr.sort((a,b) => (b + a).toLocalCompare(a + b));
  
  const result = strArr.join('');

  return result[0] === '0' ? '0' : result

}

const input = [3, 30, 34, 5, 9];
formLargestNumber(input); // "9534330"