// function num(x) {
//     let first = 0;
//     for(let i = 0; i < s; i++) {

//     }
// }

function fibonacciWithForLoop(n) {
    let previous = 0;
    let current = 1;

for(let i = 2; i <= n; i++) {
    const next = previous + current;

    previous = current;
    current = next;
    console.log(current);
    }
    return current;
}
fibonacciWithForLoop(100);