var strStr = function(haystack, needle) {
    // If needle is an empty string, return 0
    if (needle === "") return 0;
    
    return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("hello", "")); // Output: 0
