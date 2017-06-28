'use strict';

let expect = require('expect');
let LinkedList = require('../index.js');

describe('testing index', () => {
  describe('testing appendNode', () => {
    it('should return original 4 and appended 5 and 6', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      expect(list.value).toEqual(4);
      expect(list.next.value).toEqual(5);
      expect(list.next.next.value).toEqual(6);
    });
    it('should append strings too', () => {
      let list = new LinkedList('apple');
      list.appendNode(new LinkedList('horse'));
      list.appendNode(new LinkedList(6));
      expect(list.value).toEqual('apple');
      expect(list.next.value).toEqual('horse');
      expect(list.next.next.value).toEqual(6);
    });
    it('should append objects too', () => {
      let list = new LinkedList({apple: 'banana'});
      list.appendNode(new LinkedList({horse: 'monkey'}));
      list.appendNode(new LinkedList(6));
      expect(list.value).toEqual({apple: 'banana'});
      expect(list.next.value).toEqual({horse: 'monkey'});
      expect(list.next.next.value).toEqual(6);
    });
  });

  describe('testing forEach', () => {
    it('should return 15, the sum of the linkedlist', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      let sum = 0;
      list.forEach((node) => sum += node.value);
      expect(sum).toEqual(15);

    });
    it('should double each value in the list', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      let double = (x) => x.value = x.value * 2;
      list.forEach(double);
      expect(list.value).toEqual(8);
      expect(list.next.value).toEqual(10);
      expect(list.next.next.value).toEqual(12);
    });
    it('should return subtract 2 from our values', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      let minusTwo = (x) => x.value = x.value - 2;
      list.forEach(minusTwo);
      expect(list.value).toEqual(2);
      expect(list.next.value).toEqual(3);
      expect(list.next.next.value).toEqual(4);
    });
  });

  describe('testing findMiddleNode', () => {
    it('should return 5', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      let middleNode = list.findMiddleNode();
      expect(middleNode.value).toEqual(5);
    });
    it('should return 5 still', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      list.appendNode(new LinkedList(7));
      let middleNode = list.findMiddleNode();
      expect(middleNode.value).toEqual(5);
    });
    it('should return only node if only one node', () => {
      let list = new LinkedList({apple: 'banana'});
      let middleNode = list.findMiddleNode();
      expect(middleNode.value).toEqual({apple: 'banana'});
    });
  });

  describe('testing remove Node', () => {
    it('should remove node 5', () => {
      let list = new LinkedList(4);
      let list2 = new LinkedList(5);
      let list3 = new LinkedList(6);
      list.appendNode(list2);
      list.appendNode(list3);
      list.remove(list2);
      expect(list.value).toEqual(4);
      expect(list.next.value).toEqual(6);
    });
    it('should remove last node', () => {
      let list = new LinkedList(4);
      let list2 = new LinkedList(5);
      let list3 = new LinkedList(6);
      list.appendNode(list2);
      list.appendNode(list3);
      list.remove(list3);
      expect(list.next.value).toEqual(5);
      expect(list.next.next).toEqual(null);
    });
    it('should remove first node', () => {
      let list = new LinkedList(4);
      let list2 = new LinkedList(5);
      let list3 = new LinkedList(6);
      list.appendNode(list2);
      list.appendNode(list3);
      let noHead = list.remove(list);
      expect(noHead).toEqual(list2);
    });
  });

  describe('testing findNthNode', () => {
    it('should return the first Node', () => {
      let list = new LinkedList(4);
      let list2 = new LinkedList(5);
      let list3 = new LinkedList(6);
      list.appendNode(list2);
      list.appendNode(list3);
      let nthNode = list.findNthNode(0);
      expect(nthNode).toEqual(list);
    });
    it('should return the last Node', () => {
      let list = new LinkedList(4);
      let list2 = new LinkedList(5);
      let list3 = new LinkedList(6);
      list.appendNode(list2);
      list.appendNode(list3);
      let nthNode = list.findNthNode(2);
      expect(nthNode).toEqual(list3);
    });
    it('should return a  middle Node', () => {
      let list = new LinkedList(4);
      let list2 = new LinkedList(5);
      let list3 = new LinkedList(6);
      list.appendNode(list2);
      list.appendNode(list3);
      let nthNode = list.findNthNode(1);
      expect(nthNode).toEqual(list2);
    });
  });

  describe('testing reverse', () => {
    it('should switch a linked list of two', () => {
      let list = new LinkedList(4);
      let list2 = new LinkedList(5);
      list.appendNode(list2);
      list.reverse();
      expect(list2.value).toEqual(5);
      expect(list2.next).toEqual(list);
    });
    it('should return have no effect on a list of one node', () => {
      let list = new LinkedList(4);
      list.reverse();
      expect(list.value).toEqual(4);
    });
    it('should return reversed LinkedList', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      list.appendNode(new LinkedList(7));
      let listLast = new LinkedList(8);
      list.appendNode(listLast);
      let x = list.reverse();
      expect(x.value).toEqual(listLast.value);
      expect(x.next.value).toEqual(listLast.next.value);
      expect(x.next.next.next.next.value).toEqual(listLast.next.next.next.next.value);
    });
  });
});
