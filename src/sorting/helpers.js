function swap(arr, idx1, idx2) {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
  return arr;
}

function merge(arr1, arr2) {
  let merged = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());      
    }
  }
  if (arr1.length > 0) {
    merged = merged.concat(arr1);
  }
  if (arr2.length > 0) {
    merged = merged.concat(arr2);
  }
  return merged;
}

function partition(arr) {
  const idx = Math.floor(arr.length / 2);
  const left = arr.splice(0, idx);
  return [left, arr];
}


module.exports = {
  swap,
  merge,
  partition,
}