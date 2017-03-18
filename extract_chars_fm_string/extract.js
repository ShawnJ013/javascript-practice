//  Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// function extract_char (str1) {
// 	var str=str1;
// 	var uniq1="";
// 	for (var x=0; x<str.length; x++)
// 	{
// 		if (uniq1.indexOf(str.charAt(x))==-1)
// 		{
// 			uniq1 += str[x];
// 		}
// 	}
// 	return uniq1;
// }
// console.log(extract_char ("thequickbrownfoxjumpsoverthelazydog"));

function uniqueChars(str) {

    var result = [];

    for (var i = 0; i < str.length; i++) {

        if (result.indexOf(str[i]) === -1) {

            result.push(str[i]);
        }
    }

    return result.join("");
}

console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));


