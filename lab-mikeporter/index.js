'use strict';

class LinkedList {

  constructor (value) {
    this.value = value;
    this.next = null;
  }

  // O(n) It always goes through n events and adds a node at the end
  appendNode (node) {
    if (!(node instanceof LinkedList))
      return null;
    if (!this.next)
      return this.next = node;
    this.next.appendNode(node);
  }
  // O(n) It always goes through all the events
  forEach (callback) {
    let current = this;
    while (current) {
      callback(current, this);
      current = current.next;
    }
  }
  //
  findMiddleNode () {
    let slow, fast;
    slow = fast = this;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  // O(n) if we want to remove the last node, we would iterate through the whole node
  remove (node) {
    // take a previous node, and set it's next to the after node
    // if node is the last node, set it's previous to null
    let insertAfter;
    insertAfter = this;
    if (insertAfter.next === node) {
      if (!insertAfter.next.next)
        return insertAfter.next = null;
      return insertAfter.next = insertAfter.next.next;
    }
    insertAfter.next.remove(node);
  }
  // O(n^2)
  reverse (previous) {
    //  loop through a linkedlist and set collect each value
    // while doing this set each value to a variable
    // concern is passing by reference, so overwriting
    let after;
    if (previous === undefined) {
      previous = null;
    }
    // current = this;
    if (!this.next) {
      console.log('onceinalifetimeafter', after)
      return console.log('potato', previous);}
    // current = Object.assign({}, current);
    after = this.next;
    console.log('after', after);
    this.next = previous;
    console.log('this.next', this.next);
    previous = this;
    console.log('previous', previous);
    console.log('##############')
    after.reverse(previous, after);
  }

  reverseNodes() {
    let node = this;
    let pre = null;
    while (node) {
      let save = node.next;
      node.next=pre;
      pre= node;
      node = save;
    }
    return pre;
  }
  // findNthNode (number) {
  //   let count = 0;
  // }
}

module.exports = LinkedList;
