var minDeletion = function(s, k) {
    const freqMap = new Map();

    // Count frequency of each character
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // If already within limit, no deletions needed
    if (freqMap.size <= k) return 0;

    // Sort frequencies in ascending order
    const frequencies = Array.from(freqMap.values()).sort((a, b) => a - b);

    let deletions = 0;
    const toDelete = freqMap.size - k;

    for (let i = 0; i < toDelete; i++) {
        deletions += frequencies[i];
    }

    return deletions;
};

console.log(minDeletion("abc", 2));     // Output: 1
console.log(minDeletion("aabb", 2));    // Output: 0
console.log(minDeletion("yyyzz", 1));   // Output: 2
