// Implement Promise.all

function showText(text, time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises) {
  let result = [];
console.log("promises",promises);

  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if(index === promises.length - 1){
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  })
}

// Promise.all([
//   showText('hello', 1000),
//   Promise.resolve('hello'),
//   Promise.reject("bye")
// ]).then((value) => console.log(value));

myPromiseAll([
  showText('hello', 1000),
  Promise.resolve('hello'),
  // Promise.reject("bye")
]).then((value) => console.log(value));