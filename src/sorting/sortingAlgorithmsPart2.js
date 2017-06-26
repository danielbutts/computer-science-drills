'use strict';

const swap = require('./helpers').swap;
const merge = require('./helpers').merge;
const partition = require('./helpers').partition;

function mergeSort(arr) {
  arr = arr.slice();
  if (arr.length > 1) {
    let parts = partition(arr);
    let left = parts[0];
    let right = parts[1];
    
    left = mergeSort(left);
    right = mergeSort(right);

    arr = merge(left, right);
  }
  return arr
}

function quickSort(arr) {
  let sorted = [];
  let pivot = Math.floor(Math.random()*arr.length);
  let left = [];
  let right = [];
  arr.forEach((el, idx) => {
    if (idx !== pivot) {
      if (arr[idx] <= arr[pivot]) {
        left.push(arr[idx]);
      } else {
        right.push(arr[idx]);
      }
    }
  })
  if (left.length > 1) {
    left = quickSort(left);
  }
  if (right.length > 1) {
    right = quickSort(right);
  }
  
  sorted = left;
  sorted.push(arr[pivot]);
  sorted = sorted.concat(right);
  return sorted;
}

module.exports = {
  mergeSort,
  quickSort,
};