const mergeSort = require('./sortingAlgorithmsPart2').mergeSort;
const quickSort = require('./sortingAlgorithmsPart2').quickSort;
const bubbleSort = require('./sortingAlgorithmsPart1').bubbleSort;
const selectionSort = require('./sortingAlgorithmsPart1').selectionSort;
const insertionSort = require('./sortingAlgorithmsPart1').insertionSort;

let arr = [1,4,2,9,13,3,5,11,7,6,10,12]

console.log(arr);
console.log('mergeSort', mergeSort(arr));
console.log('quickSort', quickSort(arr));
console.log('bubbleSort', bubbleSort(arr));
console.log('selectionSort', selectionSort(arr));
console.log('insertionSort', insertionSort(arr));

