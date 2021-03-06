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

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let node = new Node(data);
    if (!this.head) this.head = node;

    this.getLast().next = node;

    //     His solution
    // let last = this.getLast();
    // if (last) {
    //   last.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
  }
}

const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
console.log(list.getLast()); // returns 3

// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
