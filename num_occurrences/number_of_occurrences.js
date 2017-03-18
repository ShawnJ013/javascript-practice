//Write a JavaScript function to  get the number of occurrences of each letter in specified string

// function Counts_Char(str1) {
//     var xchars = {};
//     str1.replace(/\S/g, function(l) { xchars[l] = (isNaN(xchars[l]) ? 1 : xchars[l] + 1); });
//     return xchars;
// }
// console.log(Counts_Char("The quick brown fox jumps over the lazy dog"));

// function Char_Counts(str1) {
//     var uchars = {};
//     str1.replace(/\S/g, function(l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
//     return uchars;
// }
// console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

function foo(str) {
var str = str.toLowerCase();
var obj = {};
str.split("").map(function(sum) { obj[sum] = !obj[sum] ? 1 :obj[sum]+1});
return obj;
}
console.log(foo("The quick brown fox jumps over the lazy dog"));

