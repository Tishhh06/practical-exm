
// Merge Sort

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    const left = new Array();
    const right = new Array(array.length - mid);

    for (let i = 0; i < mid; i++) {
        left[i] = array[i];
    }

    for (let i = mid; i < array.length; i++) {
        right[i - mid] = array[i];
    }

    const sortLeft = mergeSort(left);
    const sortRight = mergeSort(right);

    return merge(sortLeft, sortRight);
}

function merge(left, right) {
    const result = new Array(left.length + right.length);

    let i = 0,
        j = 0,
        k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++];
        }
    }
    while (i < left.length) {
        result[k++] = left[i++];
    }
    while (j < right.length) {
        result[k++] = right[j++];
    }

    return result;
}

let array = [453, 36, 241, 6774, 1414, 2, 5];
const sortedArray = mergeSort(array);

console.log(sortedArray);

