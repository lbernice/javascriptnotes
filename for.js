// for(let i = 0; i < 7; i++){
//     console.log(i);
//     for(let j = 0; j < 3, j++){
//         console.log(j);
//     }
// }
// let money = 100 
// while(money > 0){
//     console.log("let it ride", money)
//     money--;
// }
const numsArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

function linearSearch(num, arr){
    let found;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            found = arr[i];
            break;
        } else {
            console.log("still looking");
        }
    }
    if(!found) {
        console.log("sorry I couldn't find that");
    }    // if(found === null) this would work too

    console.log(found);
    return found;
}
linearSearch(2, numsArr);