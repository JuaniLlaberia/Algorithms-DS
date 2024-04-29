/*
Insertion Sort

-It starts at the second item (in JS at index 1), and we compare the value with the previous
 one, if the prev is greater, we swap else we leave them as they are.
-Then we just repeat this process for the whole array, 

-For example, we have [2, 1, 0]
 1st it compares the 1 with the 2. As 1 is smaller, it swaps them ([1, 2, 0])
 ** it moves to the two (its greater than 1, so its good)
 2nd We move to the next item (0). 0 is smaller than 2, so we swap them. Then we compare the 0 with the 1 and we swap them.
 Final result [0, 1, 2]
*/

function insertionSort(array) {
  let temp;
  let j;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

const arr = insertionSort([6, 3, 5, 1, 0, 2]);
console.log(arr);
