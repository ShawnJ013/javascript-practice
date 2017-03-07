//  function that accepts a string as a parameter and counts the number of vowels within the string.

// function countsVowels(str1)

// {
// 	var countsVowels = 'aeiouAEIOU'
// 	var count = 0;

// 	for(var x = 0; x < str1.length ; x++)
// 	{
// 		if (countsVowels.indexOf(str1[x]) !==-1)
// 		{
// 			count += 1;
// 		}
// 	} 
// 	return count;
// }
// console.log(countsVowels("The quick brown fox"));


// To find vowel characters, use the regular expressions within match() method. 

function foo(str) {
return str.match(/[ayuioe]/gi).length;
}
console.log(foo("The quick brown fox"));


// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

// Sample Data and output: 
// Example string : 'The quick brown fox' 
// Expected Output : 5