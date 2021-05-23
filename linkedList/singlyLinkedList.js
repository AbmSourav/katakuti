
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
		this.size = 0
	}

	insert(node) {
		this.size++;
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

	getHead() {
		return this.head.val;
	}

	getTail() {
		let tail = null
		let currentNode = this.head
		if (currentNode === null) return null;

		while ( currentNode !== null ) {
			if (currentNode.next === null) {
				tail = currentNode
			}
			currentNode = currentNode.next
		}
		return tail.val;
	}

	remove(val) {
		if (this.head.val === val && this.head.next !== null) {
			this.head = this.head.next
			this.size--
			return true;
		}

		// two pointer approach
		let previousNode = null
		let currentNode = this.head
		while (currentNode !== null) {
			if (val === currentNode.val) {
				previousNode.next = currentNode.next
				this.size--
				return true;
			}

			previousNode = currentNode
			currentNode = currentNode.next
		}

		return false;
	}
}

const linkedList = new LinkedList();
linkedList.insert("a");
linkedList.insert("b");
linkedList.insert("c");

// console.log(linkedList);
// head --> a --> b --> c --> null

// console.log(linkedList.getHead());	// a

// console.log(linkedList.getTail());	// c

linkedList.remove('a');
console.log(linkedList);
// head --> b --> c --> null
