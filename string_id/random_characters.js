// JavaScript function that generates 
// a string id (specified length) of random characters.

function id(1) {
	var char1 = "";
	var char2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i=0; i<1; i++ )
	{
		char1 += char2.charAt(Math.floor(Math.random() * char2.length));
	}
	return char1;
}
console.log(id(8));
