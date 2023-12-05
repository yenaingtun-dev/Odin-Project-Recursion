function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middleIndex);
    const rightHalf = arr.slice(middleIndex);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const unsortedArray = [3, 1, 4, 5, 9, 2, 6, 7, 8, 0];
const sortedArray = mergeSort(unsortedArray);
