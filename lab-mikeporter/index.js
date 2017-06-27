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
  // O(n) Loops through all the nodes
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
    if (this === node)
      return this.next;
    let insertAfter;
    insertAfter = this;
    if (insertAfter.next === node) {
      if (!insertAfter.next.next)
        return insertAfter.next = null;
      return insertAfter.next = insertAfter.next.next;
    }
    insertAfter.next.remove(node);
  }

  // O(n) Looping through once, chopping off the first and creating new list
  reverse (previous) {
    let after;
    if (previous === undefined) {
      previous = null;
    }
    if (!this.next) {
      this.next = previous;
      return this;
    }
    after = this.next;
    this.next = previous;
    previous = this;
    after.reverse(previous);
  }

  //  O(n) loops through all the nodes
  findNthNode (num) {
    let P1;
    P1 = this;
    for (let i = 0; i < num; i++) {
      P1 = P1.next;
    }
    return P1;
  }
}

module.exports = LinkedList;
