//Selection Sort
//We keep track of the index of the min value while we iterate.
//When we reach the end we swap the min with the first one, and repeat (now we would swap the min with the second)
function selectionSort(array) {
  let min;

  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; i < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
}

selectionSort([4, 2, 3, 1, 5]);
