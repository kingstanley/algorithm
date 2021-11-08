function binarySearch( arr,  l,  r,  x) {
    if (r >= l) {
        let mid = l + (r - l) / 2;
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            return binarySearch(arr, l, mid + 1, r, x);
        return binarySearch(arr, mid + l, r, x);
    }
    return -1
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 4, 4));

function sum() {
  let  x = 1;
    for (let i = 1; i <= 128; i +=i) {
        x += x
    }
    // var regex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
  const regex = /^(?!password*).*(?=.{8,32})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&;@?"]).*$/


    // console.log(regex.test('passwrdsS12350504@'));
    return x;
}

function binarySearch1(params, value) {
    let firstIndex = 0;
    let lastIndex = params.length;
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    while (params[middleIndex] != value  && firstIndex < lastIndex) {
        if (value < params[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > params[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return (params[middleIndex] != value) ? -1 : middleIndex;
}

console.log(binarySearch1([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(sum())