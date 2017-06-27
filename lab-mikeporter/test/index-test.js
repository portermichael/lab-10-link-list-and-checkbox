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
    it('should return double our values', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      function double(x) {return x * 2;}
      list.forEach(double);
      expect(list.value).toEqual(8);
      expect(list.next.value).toEqual(10);
      expect(list.next.next.value).toEqual(12);
    });
    it('should concatonate or add', () => {
      let list = new LinkedList('apple');
      list.appendNode(new LinkedList('horse'));
      list.appendNode(new LinkedList(6));
      let conAddOnAte = (x) => x + 1;
      list.forEach(conAddOnAte);
      expect(list.value).toEqual('apple');
      expect(list.next.value).toEqual('horse');
      expect(list.next.next.value).toEqual(6);
    });
    it('should return subtract 2 from our values', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      let minusTwo = (x) => x-2
      list.forEach(minusTwo);
      expect(list.value).toEqual(4);
      expect(list.next.value).toEqual(5);
      expect(list.next.next.value).toEqual(6);
    });
  });


  describe('testing reverse', () => {
    it('should return reversed LinkedList', () => {
      let list = new LinkedList(4);
      list.appendNode(new LinkedList(5));
      list.appendNode(new LinkedList(6));
      list.appendNode(new LinkedList(7));
      list.appendNode(new LinkedList(8));
      let holder = Object.assign({}, list);
      list.reverse();
      console.log('afterlist', list);
      expect('purple').toEqual('brown');
    });
  });
});
