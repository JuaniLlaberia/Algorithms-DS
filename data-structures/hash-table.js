//Hash tables
/*
 INFORMATION
 -We pass the key to a function in order to get a number based on the string we passed. But
  this is one way, it means we can't get the key with the number, just the number with the key.
 -Hashes are deterministic (hash fn always produces the same numbers) => If you pass the key 'nails' and you key the number 2,
  everytime you pass 'nails' it will return the same number.

  COLLISIONS
  -When we pass a key to the hash fn we could get the same number for more than one value, a collision is created in that case.
  -We are going to do channing. We could also have a linked list on each address (but not in this course).

  BIG O Notation
  -The hash function is O(1)
  -Setting and Getting elements are O(1). Unless the key is nested, because it could be O(n) when is nested. But generally is O(1) as the hash function
   is usually very efficient and creates the less amount of collision as possible. 
  */

//Hash Table class
class HashTable {
  constructor(size = 7) {
    //Address space
    this.dataMap = new Array(size);
  }

  //Hash Function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    //Only do this if its empty
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    //We push to the array, so we can chain if we have the same index in more than one pair
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  //Returns all keys
  keys() {
    let tableKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          tableKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return tableKeys;
  }
}

//Create hash table
let myHashTable = new HashTable();
//Adding items to the hash table
myHashTable.set('bolts', 1400);
myHashTable.set('lumber', 70);
myHashTable.set('washers', 50);
//Getting and item
console.log(myHashTable.get('bolts')); //1400
console.log(myHashTable.get('calbes')); //undefined
//Get all keys
console.log('KEYS', myHashTable.keys());
