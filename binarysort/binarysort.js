function binarySort(arr) {
    
    for (let j = 0; j < arr.length; j++){
        const key = arr[j];
        console.log("key: ", key)
        let i = j - 1;
        while (i > 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i = i - 1;
            arr[i] = key;
         
        }
    }
    return arr;
}

console.log(binarySort([5, 2, 4, 6, 1, 3]));