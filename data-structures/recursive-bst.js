class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Recursive Binary Search Tree
class RBST {
  constructor() {
    this.root = null;
  }

  contains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (value === currentNode.value) return true;

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }

  minValue(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  #insert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);

    if (value < currentNode.value) {
      currentNode.left = this.#insert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#insert(value, currentNode.right);
    }

    return currentNode;
  }
  insert(value) {
    if (this.root === null) this.root = new Node(value);
    this.#insert(value);
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        let subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }

    return currentNode;
  }
  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root);
  }
}
