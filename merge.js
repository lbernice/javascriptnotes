let mergeFun = function (str1, str2) {
    let merged = "";
    let distance = Math.max(str1.length, str2.length);

    for(let i=0; i < distance; i++) {
        if (i < str1.length) {
            merged = merged +str1[i];
        }
    }
    return merged;
};
console.log(mergeFun("abc", "defgdfghdfghdfghfhdg"));