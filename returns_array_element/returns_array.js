// function that returns array elements larger than a number. 

 // function return_array (val) {
 // 	return function(evalue, index, array)
 // 	{
 // 		return (evalue >= val);
 // 	};
 // }
 // var result = [11, 9, 2, 31, 64, 10, 10, 154]. filter(return_array(10));
 // console.log(result);

function filterArray(arr,n) {

return arr.filter(function (elem) { return elem > n });
}
console.log(filterArray([2,4,3,2,9,67,55,43,7],5));