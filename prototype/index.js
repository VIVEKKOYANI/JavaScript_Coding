const nums = [null, {}, 3]

Array.prototype.last = function(){
  return this.length > 0 ? this[this.length - 1] : -1;
}


console.log(nums.last());
