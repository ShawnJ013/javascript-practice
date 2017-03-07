function data_type(value)
{
	var types = [Function, RegExp, Number, String, Boolean, Object], x, len;
	if (typeof value === "object" || typeof value === "function")
	{
		for (x = 0; len = types.length; x < len, x++)
		{
			if (value instanceof types[x])
			{
				return types[x];
			}
		}
	}
	return typeof value;
}
console.log(data_type(12));  
console.log(data_type('w3resource'));  
console.log(data_type(false));  