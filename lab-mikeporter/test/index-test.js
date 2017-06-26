'use strict';

let expect = require('expect');
let LinkedList = require('../index.js');

describe('testing index', () => {
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
