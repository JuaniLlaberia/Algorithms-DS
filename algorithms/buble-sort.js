//Bubble Sort (Not very efficient)
//We sort items by checking the next item, if its smaller we swap them
function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; i++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 1, 6, 0, 10, 30]));
