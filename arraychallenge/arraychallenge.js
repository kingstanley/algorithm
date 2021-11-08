 
function arrayChallenge(arr) {
    const countArr = [];
    arr.forEach((value,index) => {
        // console.log('value: ', value, ' index: ', index);
        if (index == 0) {
            countArr.push(index);
        }
        else {  let countVal = 0;
            for (let i = 0; i < index; i++){
               countVal += value - arr[i];
               
            }
            countArr.push(countVal);
        }
    });
    
    return countArr
}

console.log(arrayChallenge([1, 2, 2, 3])) // [0,1,1,4]
console.log(arrayChallenge([2, 4, 3])) // [0,2,0]
console.log(arrayChallenge([2, 1, 3])) // [0,-1,3]
console.log(arrayChallenge([3, 1, 2, 3])) //[0, -1, 2, 0]

// function plusminus(arr) {
//     const pos = arr.filter(a => a > 0);
//     console.log(parseFloat(pos.length / arr.length).toFixed(6));
//     const neg = arr.filter(a => a < 0);

//     console.log(parseFloat(neg.length / arr.length).toFixed(6));

//     const zero = arr.filter(a => a == 0);
//     console.log(parseFloat(zero.length / arr.length).toFixed(6));
// }

// console.log(plusminus([-4, 3, -9, 0, 4, 1]))