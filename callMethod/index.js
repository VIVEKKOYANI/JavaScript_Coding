var obj = {
  helloworld: function(){
    return "hello world, " + this.name
  },
  name: 'Hello'
}

var obj2 = {
  helloworld: obj.helloworld,
  name: 'bye'
}

console.log("obj2", obj2.helloworld());
console.log("obj1", obj2.helloworld.call(obj));