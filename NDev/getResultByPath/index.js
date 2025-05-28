function getResultByPath(path, obj) {
  //write your implementation here
  const parts = path.match(/[^.[\]]+/g);
  return parts.reduce((acc, key) => {
    if (acc == null) return acc;
    return acc[key];
  }, obj);

}
const path = "data.results.status";
const obj = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}
getResultByPath(path, obj);