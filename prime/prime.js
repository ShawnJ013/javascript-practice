// function primeNum(n) {
//     if (n === 1) {
//         return false;
//     } else if (n === 2) {
//         return true;
//     } else {
//         for (var x = 2; x < n; x++) {
//             if (n % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// console.log(primeNum (1));

function prime(num){
if (num > 1 && num % 2 !== 0){
alert("you have a prime number")
} 
else{
alert("you do not have a prime number")
}
}
console.log(prime(8888));