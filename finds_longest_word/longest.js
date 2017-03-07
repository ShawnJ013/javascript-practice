// JavaScript function that accepts a string as a parameter and find the longest word within the string.

// function longest_word(str)
// {
// 	var array1 = str.match(/\w[a-z]{0,}/gi);
// 	var result = array1[0];

// 	for(var x = 1 ; x < array1.length ; x++)
// 	{
// 		if (result.length < array1[x].length)
// 		{
// 		result = array1[x];
// 		}
	
// 	}
// 	return result;
// }
// console.log(longest_word('Web Development Tutorial'));


function longestWord(input) {
var x = input.split(' ');
console.log(x);
var a = x[0];

for (var i = 1; i < x.length; i++) {
if (a.length < x[i].length) {
a = x[i];
}
}
console.log('The longest word is ' + a);
}
longestWord('javascript tutorialqwerwwedxzszccccccc aaaaasdddswa');