 
// Adding a groupBy method to the Array prototype
Array.prototype.groupBy = function (keyFn) {
  return this.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

const array = [{id: "1"}, {id: "1"}, {id: "2"}];
const grouped = array.groupBy(item => item.id);
console.log(grouped);