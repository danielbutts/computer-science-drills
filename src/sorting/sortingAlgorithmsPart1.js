'use strict';

const swap = require('./helpers').swap;
function bubbleSort(arr) {
  arr = arr.slice();
  let done = false;  
  while (!done) {
    done = true;
    for (let i = 0; i < arr.length - 1; i++ ) {
      if (arr[i] > arr[i+1]) {
        arr = swap(arr, i, i+1);
        done = false;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  arr = arr.slice();
  for (let i = 0; i < arr.length; i++ ) {
    let arrIndex = i;
    let minIdx = arrIndex;

    for (let j = arrIndex + 1; j < arr.length; j++ ) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, arrIndex, minIdx);
  }
  return arr;
}

function insertionSort(arr) {
  arr = arr.slice();
  if (arr.length < 2) {
    return arr;
  }
  let arrIndex = 0;
  
  for (let i = 1; i < arr.length; i++) {
    let currentItem = i;
    for (let j = currentItem - 1; j > 0; j-- ) {
      if (arr[currentItem] < arr[j]) {
        swap(arr, currentItem, j);
        currentItem = j;
      }
    }
  }
  return arr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};