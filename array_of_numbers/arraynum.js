 // function which will take an array of numbers stored and 
 // find the second lowest and second greatest numbers, respectively.

 // function arraynum(arr_num) {
 //     arr_num.sort(function(x, y) {
 //         return x - y;
 //     });
 //     var array1 = [arr_num[0]];
 //     var result = [];
 //     for (var j = 1; j < arr_num.length; j++) {
 //         if (arr_num[j - 1] !== arr_num[j]) {
 //             array1.push(arr_num[j]);
 //         }
 //     }
 //     result.push(array1[1], array1[array1.length - 2]);
 //     return result.join(',');
 // }

 // console.log(arraynum([1, 2, 3, 4, 5]));


function foo(arr) { 
arr = arr.sort(function(a,b) {return a-b});
return arr[1]+","+arr[arr.length-2];
}
console.log(foo([1,2,3,4,5]));