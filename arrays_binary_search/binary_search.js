// Write a function for searching JavaScript arrays with 
// a binary search.
// Note : A binary search searches by splitting an 
// array into smaller and smaller chunks until it finds 
// the desired value.

// function array_b_search(array1, element1) {
//     var position1 = Math.floor(array1.length / 2);

//     if (array1[position1] === element1) {
//         return position1;
//     } else if (array1.lenth === 1) {
//         return null;
//     } else if (array1[position1] < element1) {
//         var arr = array1.slice(position1 + 1);
//         var res = array_b_search(arr, element1);
//         if (res === null) {
//             return null;
//         } else {
//             return position1 + 1 + res;
//         }
//     } else {
//         var arr1 = array1.slice(0, position1);
//         return array_b_search(arr1, element1);
//     }
// }

// var myArray = [1];
// console.log(array_b_search(myArray, 6));

// function BinarySearch(arr,t) 
// { 
// var i = 0, l = arr.length, m;

// while (i < l) {
// m = Math.floor((i+l)/2);
// if (t <= arr[m]) l = m;
// else i = m+1;
// }

// if (arr[i] === t) return i; 
// else return -1; 
// }
// console.log(BinarySearch([1,2,3,4,5,6,7],3));


function array_binarySearch(narray, delement) {  
   var mposition = Math.floor(narray.length / 2);  
  
   if (narray[mposition] === delement){  
      return mposition;  
   }  
   else if (narray.length === 1)   
   {  
      return null;  
   }  
   else if (narray[mposition] < delement) {  
      var arr = narray.slice(mposition + 1);  
      var res = array_binarySearch(arr, delement);  
      if (res === null)  
      {  
         return null;  
      }  
      else {  
         return mposition + 1 + res;  
      }  
   }  
   else {  
      var arr1 = narray.slice(0, mposition);  
      return array_binarySearch(arr1, delement);  
   }  
}  
  
 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];  
 console.log(array_binarySearch(myArray, 6));  


