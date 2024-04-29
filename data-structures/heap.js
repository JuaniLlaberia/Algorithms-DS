/*
Heap

-Is a binary tree, but the numbers are organized different.
-Each node has a value greater than each of it's descendants
-The max value is always at the top
-The tree will ALWAYS be complete (fills from left to right with out any gaps)
-You can have duplicates

Types:
-MAX HEAP: When the max value is at the top
-MIN HEAP: When the min value is at the top

-There is no particular order between nodes, as long as the parent is greater and the max is at the top

In this course, we will implement a heap as an array, storing int in an array
    [99, 72, 61, 58]

But there are two options when using this representation approach:
 -Using the index 0
 -Not using the index 0


When INSERTING:
    1st We just add the value to the heap as we need to make it complete
    2nd We compare the value with its parent. If its greater than the parent we swap them. We repeat this until the parent is greater that this new value.
    Its call, bubbling.
*/

//Using index 0
class Heap {
  #heap = [];

  //Helper methods
  getHeap() {
    return [...this.#heap]; //Copy
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  #sinkDown(index) {
    let maxIndex = index;
    let size = this.#heap.length;

    while (true) {
      let leftIndex = this.#leftChild(index);
      let rightIndex = this.#rightChild(index);

      if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
        maxIndex = leftIndex;
      }

      if (rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]) {
        maxIndex = rightIndex;
      }

      if (maxIndex !== index) {
        this.#swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  //Heap methods
  insert(value) {
    this.#heap.push(value);
    let crr = this.#heap.length - 1;

    while (crr > 0 && this.#heap[crr] > this.#heap[this.#parent(crr)]) {
      this.#swap(crr, this.#parent(crr));
      crr = this.#parent(crr);
    }
  }

  //We can only remove the greatest value
  remove() {
    //CASE 1: Empty Heap
    if (this.#heap.length === 0) return null;
    //CASE 2: Just 1 value in Heap
    if (this.#heap.length === 1) return this.#heap.pop();
    //CASE 3: Regular case (more than 1 value)
    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    //Sink/Sort the Heap
    this.#sinkDown(0);

    //Returning the removed value
    return maxValue;
  }
}

/*
Priority Queue & Big(O)
O(log n)
*/
