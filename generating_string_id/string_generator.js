// function that generates a  
// string id (specified length) of random characters

function id(l){
	var text="";
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var=0; i<l; i++)
	{
		text += chars.charAt(Math.random() * chars.length));
	}
	return text;
}
console.log(id(8));