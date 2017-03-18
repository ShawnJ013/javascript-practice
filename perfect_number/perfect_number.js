function perfect_num(number)
{
	var temp = 0;
	for (var i=1; i<=number/2;i++)
	{
		if (number%i === 0)
		{
			temp += i;
		}
	}
	if (temp === number && temp !== 0)
	{
		alert("It is a perfect number.");
	}
	else
	{
		alert("It is not a perfect number.");
	}
}
perfect_num(15);