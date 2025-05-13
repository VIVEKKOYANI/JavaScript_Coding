function isAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false;
    }

    let counter = {};
    for (let letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1;
    }

    for (let items of string2) {
        if (!counter[items]) {
            return false;
        }
        counter[items] -= 1;
    }
    return true;
}
// short
// const isAnagram = (s1, s2) =>
//     s1.split('').sort().join('') === s2.split('').sort().join('');

//

function isAnagram () {
   // Normalize: remove non-letters and convert to lowercase
    const cleanStr = (str) =>
        str
            .toLowerCase()
            .replace(/[^a-z]/g, ''); // keep only alphabetic characters

    const cleaned1 = cleanStr(str1);
    const cleaned2 = cleanStr(str2);

    if (cleaned1.length !== cleaned2.length) return false;

    const freq = {};

    for (let char of cleaned1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of cleaned2) {
        if (!freq[char]) return false;
        freq[char]--;
    }

    return true; 
}

const result = isAnagram('hello', 'lloeh');
console.log("result", result);
