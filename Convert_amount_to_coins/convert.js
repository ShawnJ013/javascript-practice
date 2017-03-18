// function amountToCoins(num, coins) {
//     if (num === 0) {
//         return [];
//     } else {
//         if (num >= coins[0]) {
//             left = (num - coins[0]);
//             return [coins[0]].concat(amountToCoins(left, coins));
//         } else {
//             coins.shift();
//             return amountToCoins(num, coins);
//         }
//     }
// }
// console.log(amountToCoins(100, [25, 10, 5, 2, 1]));

