/*
Merge Sort

-Uses recursion.
-It splits the array until we have 1 item array, then it start joining them in the correct  order
 until we have a big sorted array.

-Time complexity: O(log n)
-Space complexity O(n) -> one for each item
*/

function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }

  return combined;
}

function mergeSort(array) {
  if (array.length === 1) return array;

  //1st Break items in half
  let midIndex = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midIndex));
  let right = mergeSort(array.slice(midIndex));

  //2nd Put items back together (recursively)
  return merge(left, right);
}

const sortedArr = mergeSort([1, 4, 5, 2]);
console.log(sortedArr);
