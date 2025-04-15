function add(count = 1, max = 10) {
  if (count > max) {
      console.log("done");
      return;
  }

  setTimeout(() => {
      console.log("delayed count", count);
      add(count + 1, max); // Call next after the delay
  }, 1000);
}



console.log("Try programiz.pro", add());