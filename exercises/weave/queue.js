// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
    // this.end = this.data.length;
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// let q = new Queue();
// q.add(1);
// q.add(5);
// q.add(3);
// q.add(2);
// q.remove();
// console.log('q.peek()', q.peek());
// console.log('q', q);

module.exports = Queue;
