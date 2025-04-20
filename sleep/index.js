// To achieve the behavior you described, you can write a sleep function that returns a Promise which resolves after a specified number of milliseconds.

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

async function run() {
  let t = Date.now();
  await sleep(100);
  console.log("Waited:", Date.now() - t); // Approx 100
}

console.log("", run());
