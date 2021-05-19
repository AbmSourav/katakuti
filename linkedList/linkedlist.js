
// create a list where every every item has the reference of it's next item.
class Node {
	constructor(node) {
		this.val = node;
		this.next = null;
	}
}

// Linked List
class LinkedList {
	constructor() {
		this.head = null
	}

	insert(node) {
		if ( this.head === null ) {
			this.head = new Node(node);
			return true;
		}

		let currentNode = this.head
		while ( currentNode.next !== null ) {
			currentNode = currentNode.next
		}

		currentNode.next = new Node(node);
		return true;
	}
}

const linkedList = new LinkedList();
linkedList.insert("a");
linkedList.insert("b");
linkedList.insert("c");

console.log(linkedList);
// head --> a --> b --> c --> null
