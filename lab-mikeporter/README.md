#Lab-10 Documentation

#Linked List

The linked list constructor takes in a value, and a has null as next set as default.
{ this.value = value; this.next = null; }

LinkedList.appendNode(node) can be used to add nodes to the linked list, if they were created through the constructor. .appendNode adds the node at the end of the list.

LinkedList.forEach(callback) calls a callback on each element of the LinkedList. If you want to affect a value, you should use .value in your callback.

LinkedList.findMiddleNode() finds and returns the middle node in odd LinkedLists and the "rounded down" node in even LinkedLists.

LinkedList.remove(node) removes the node from the LinkedList. It's easiest to use if the node is set to a variable.

LinkedList.reverse() reverses the LinkedList and returns a new headvalue.

LinkedList.findNthNode(number) finds the Nth node and returns it.
