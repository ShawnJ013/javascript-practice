function factor(number) {
    var num = [],i;
    for (i= 1; i <= Math.floor(Math.sqrt(number)); i += 1)
        if (number % 1 === 0) 
        {
            num.push(i);
            if (number / i !== i)
            num.push(number / i);
    }
    num.sort(function(x, y) 
    {
    return x - y;}); //numberic sort
    return num;
	}
console.log(factor(15)); // [1,3,5,15]   
console.log(factor(16)); // [1,2,4,8,16]   
console.log(factor(17)); // [1,17]  

// function factors(n)  
// {  
//  var num_factors = [], i;  

//  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)  
//   if (n % i === 0)  
//   {  
//    num_factors.push(i);  
//    if (n / i !== i)  
//     num_factors.push(n / i);  
//   }  
//  num_factors.sort(function(x, y)  
//    {  
//      return x - y;});  // numeric sort  
//      return num_factors;  
//     }  
// console.log(factors(15));  // [1,3,5,15]   
// console.log(factors(16));  // [1,2,4,8,16]   
// console.log(factors(17));  // [1,17]  

// function foo(n) {
// var arr = [];
// for(var i = 0; i <= n ; i++) { 
// n % i === 0? arr.push(i):arr ;
// }
// return arr;
// }
// console.log(foo(16));
// console.log(foo(28));
// console.log(foo(280));
