const Gabe = {
    name: "Gabe", //String
    age: 15, //Number
    isCool: false, //Boolean
};
// console.log(Gabe.name[0]);
// for (let i = 0; i < Gabe.name.length; i++){
//     console.log(Gabe.name[i]);
// }
// let i = 0;
// while (i < Gabe.name.length){
//     console.log(Gabe.name[i]);
//     i++;
// };

//figure out if something is part of the string 
function needle(name, search){
    if(name.includes(search)){   //or if(name === search)
        return true;
    } else {
        return false;
    }
};

console.log(needle(Gabe.name, "Gabe"));  //console.log(1 + "1");


function sortString(name){
    let x = [...Gabe.name];
}
// let x = [1,2,3];
// let y = [4,5,6];
// //let z = [...x, ...y];
// let z = [...x, ...y];
// console.log(z);

sortString(Gabe.name);


function remove(name) {
    let x = [...name];
    x.splice(0);
    console.log(x);
}
remove(Gabe.name);