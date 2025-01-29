const arrNumber = [1, 2, 8, 2, 9 ,8, 1];

const duplicates = arrNumber.filter((ele, index, arr) => arr.indexOf(ele) !== index);

console.log("duplicates",duplicates);

// using foreach

const dupli = (arr) => {
    const dupli = [];
    const org = [];

    arr.forEach((item, index) => {
        if(org.includes(item)){
            dupli.push(item);
        }else{
            org.push(item);
        }
    })

    return org;
}

const result = dupli(arrNumber);
console.log("result",result);
