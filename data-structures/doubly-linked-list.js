//Doubly Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; //This is the main difference with the Regular Linked List
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let value = this.head;

    //As we have access to the prev, we can start in the tail if the value is located after the first half
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        value = value.next;
      }
    } else {
      value = this.tail;
      for (let i = 0; i > index; i--) {
        value = value.prev;
      }
    }

    return value;
  }

  set(index, value) {
    let temp = this.get(index);

    if (!temp) return false;

    temp.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const next = prev.next;

    newNode.next = next;
    next.prev = newNode;
    newNode.prev = prev;
    prev.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    let value = this.get(index);
    value.prev.next = value.next;
    value.next.prev = value.prev;
    value.prev = null;
    value.next = null;
    this.length--;

    return value;
  }
}
