// function mergeSort (arr) {

//     // take a single array, unsorted array as a parameter
//     // split the array into two halves

// }


// function merge (array1, array2) {

//     // takes in two sorted arrays as parameters
//     // merges those sorted arrays into one sorted array
//     // returns one sorted array

// }


function mergeSort(arr) {
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}


function merge(array1, array2) {
    var result = [];
    while (array1.length && array2.length) {
        var minElem;
        if(array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }

    if (array1.length) result = result.concat(array1);
    else result = result.contac(array2);
    return result;
}

mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);

// WRONG