function spaces(s, y, t) {
    let occupied = 0;
    for(let i = 0; i < s; i++){
        if(y[i] === "C" && t[i]==="C"){
            occupied++;
        }
    }
    console.log(occupied);
}
