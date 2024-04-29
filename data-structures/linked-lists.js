//Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //It's not pointing to another node yet
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    //Create new node
    const newNode = new Node(value);
    //If the LL is empty, we make the head and tail point to this new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //Last node in list point to it and also the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    //When the LL is empty
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    //If we had just one item and we pop it
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    //When the LL is empty
    if (!this.head) return undefined;

    const temp = this.head;
    temp.next = null;
    this.head = this.head.next;
    this.length--;

    //When the LL only had 1 node
    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    //If inserting at index 0
    if (index === 0) return this.unshift(value);
    //If inserting at the last index
    if (index === this.length) return this.push(value);
    //If the index is out of boundries
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  reverse() {
    //First we need to swap the head and the tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    //Reversing the pointers
    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

let myLinkedList = new LinkedList(4);
