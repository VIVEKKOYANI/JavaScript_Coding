const arr = [{lan: "JavaScript"}, {lan: "JavaScript"}, {lan: "css"}, {lan: "Html"}]

const outPut = arr.reduce((acc, curr) => {
    const key = curr.lan;
    if(!acc[key]){
        acc[key] = {lan: key, count: 1}
    }else{
        acc[key].count += 1
    }
    return acc;
}, {})

// output = [{lan: "JavaScript", count: 2},{lan: "css", count: 1}, {lan: "Html", count:1}]