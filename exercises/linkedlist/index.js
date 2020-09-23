// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // const node = new Node(data);

    // if (this.head) {
    //   this.next = this.head;
    //   this.head = node;
    // }
    // this.head = node;
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
console.log(list.size()); // returns 3

// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
