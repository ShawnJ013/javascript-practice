function cToF(celsius)
{
	var cTemp = celsius;
	var cToFahr = cTemp * 9 / 5 + 32;
	var message = cTemp+'\xBOC is ' + cToFahr + ' \xBOF.';
		console.log(message);
		
}

function fToC(fahrenheit)
{
	var fTemp = fahrenheit;
	var fToCel = (fTemp - 32) * 5 / 9;
	var message = fTemp+'\xBOF is ' + fToCel + '\xBOC.';
		console.log(message);

}
cToF(60);
fToC(45);
