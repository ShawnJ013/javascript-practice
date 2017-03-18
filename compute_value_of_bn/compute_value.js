function compute_value(b,n) {
	var bn = 1;
	for (var i =1; i <= n; i++)
	{
		bn = b * bn;
	}
	return bn;
}
console.log(compute_value(5,5));