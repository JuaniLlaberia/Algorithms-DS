/*
TREES

-As it only has left/right it's call a BINARY TREE.
-A full tree is when every node either points to two nodes or 0 nodes.
-If one node only points to 1 node, it's not a full tree.
-When the tree is full across is called a perfect tree.

-We also have a parent structure.
        O     => Parent Node
      O   O   => Child Nodes (Siblings)

-Nodes can only have ONE parent. (ITS NOT VALID)
-A node that has no child is called LEAF.



Binary Search Tree

-We always start at the top. And we check if its greated than the parent or not. If it greater we go right, if its smaller we go left
 And we repeat that until we find a place to put the node.


=> O(log n) for: 
        -lookup
        -insert
        -remove

In comparison with arrays or linked lists, binary search trees are more efficient in lookups and removing items,
 while the other two DS are more efficient when inserting (as they are O(1)).

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//We are not setting a node when we create the BST because it can be empty, you don't need to create one.
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    //1st We create a new node
    const newNode = new Node(value);
    //Special scenario #1: The root could be === null. So we need to insert
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //2nd we need to compare it to the root, to know where to go (if < left else > right)
    //We need to repeat this process until we have a place to put the new node (if null insert new node else move to the next)
    //The above step will need to be inside of a LOOP.
    let temp = this.root;
    while (true) {
      //Special scenario #2: We have a node that is equal to a node that its already in the tree, we cannot have an equal value.
      //(We could add something like count to the node, and increase the count if we have more than one node with the same value => we are not doing that here, but in case of interview)
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;

    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  //Breadth First Search
  BFS() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return results;
  }

  DFSPreOrder() {
    let results = [];

    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
  }

  DFSPostOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }

    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
    return results;
  }
}
