var lengthOfLastWord = function(s) {
    let length = 0;
    let i = s.length - 1;

    // Step 1: Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Step 2: Count the characters of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};

var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

var lengthOfLastWord = function(s) {
    const allWord = s.trim().split(" ");                      // Step 1: Trim spaces and split by space
    const lastLength = allWord[allWord.length - 1].length;    // Step 2: Get the length of the last word
    return lastLength;                                        // Step 3: Return the length
};

console.log(lengthOfLastWord("Hello World"));         // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
