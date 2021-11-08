// function numberOfItems(arr, item) {
//   // Write the code that goes here
//   let count = 0;
//     for (let i = 0; i < arr.length; i++){
//       console.log('typeof: ',  Array.isArray(arr[i]))
//     if(Array.isArray(arr[i])){
//     return  numberOfItems(arr[i], item)
//     }
//     else{
//       if(arr[i] == item){
//         count++;
//       }
//     }
//   }
//   return count;
// }


//  if(len < arr.length){
//       if(Array.isArray(arr[len])){
//          return searchRecursively(arr[len], query, count, 0);
//       };
//       if(arr[len] === query){
//          return searchRecursively(arr, query, ++count, ++len);
//       };
//       return searchRecursively(arr, query, count, ++len);
//    };
//    return count;

// var arr = [
//   25,
//   "apple",
//   ["banana", "strawberry", "apple", 25]
// ];
// console.log(numberOfItems(arr, 25));
// console.log(numberOfItems(arr, "apple"));

// function reqex(params) {
//     const q = /qee/i;
//     const c = /zcc/i;
//     return (q.test(params) && c.test(params));
//     [].filter
// }
// console.log(reqex('QEEAZCC'))
function findUniqueNumbers(numbers) {
        const found = [];
    for (let i = 0; i < numbers.length; i++){
                const f = numbers.filter(a => a == numbers[i]);
        if (f.length == 1) {
            found.push(numbers[i])
        }
    }
//     const found = [];
//    let a = numbers.map((value, index) => {
//         const found = numbers.filter(f => f == value);
//         console.log('found: ', found)
//         if (found.length == 1) {
//             return value;
//         }
//    })
//     console.log("A: ",a)
//     for (const v of a) {
//         if (v) {
//             found.push(v);
//       }
//     }
    return found;
}

let result = findUniqueNumbers([ 1, 2, 1, 3 ]);
console.log(result);