const topKFrequent = (nums, k) => {
  const freqMap = {};
  
  for(const num of nums){
      freqMap[num] = (freqMap[num] || 0) + 1;
  }
  const sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((item) => Number(item[0]))
}



console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));