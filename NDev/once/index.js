function once(fn){
  let called = false;
  let results;

  return function(...args){
    if(!called){
      called = true;
      results = fn.apply(this, args);
      return results;
    }
    return results;
  }
}

