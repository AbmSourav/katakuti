
// create a list where every item has the reference of it's next item.
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

	// Time complexity: O(1)
	insertAtHead(node) {
		if ( this.head === null ) {
			this.head = new Node(node);
			this.size++;
			return true;
		}

		const currentNode = this.head
		this.head = new Node(node)
		this.head.next = currentNode
		this.size++
		return true;
	}

	// Time complexity: O(1)
	getHead() {
		return this.head.val;
	}

	// Time complexity: O(n)
	insertAtTail(node) {
		if ( this.head === null ) {
			this.head = new Node(node);
			this.size++;
			return true;
		}

		let currentNode = this.head
		while ( currentNode !== null ) {
			if (currentNode.next === null) {
				currentNode.next = new Node(node)
				this.size++;
				return true;
			}
			currentNode = currentNode.next
		}

		return false;
	}

	// Time complexity: O(n)
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

	// Time complexity: O(n)
	insertAtPositonX(data, position) {
		if ( position === 0 ) {
			console.error("Use `insertAtHead()` method to insert data at Head.");
			return false;
		} else if ( position === this.size ) {
			console.error("Use `insertAtTail()` method to insert data at Tail.");
			return false;
		} else if ( position > this.size && position != this.size + 1 ) {
			console.error(`Out of range. Size of the linkedList is ${this.size}`);
			return false;
		}
	
		let prevNode = null
		let currentNode = this.head
		let count = 0
		while (currentNode !== null) {
			if ( count === position ) {
				prevNode.next = new Node(data)
				prevNode.next.next = currentNode
				this.size++
			}
	
			prevNode = currentNode
			currentNode = currentNode.next
			count++
		}

		return true;
	}

	// Time complexity: O(n)
	remove(val) {
		if (this.head.val === val) {
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

	// Time complexity: O(n)
	printAllValues() {
		let currentNode = this.head
		while (currentNode !== null) {
			console.log(currentNode.val);
			currentNode = currentNode.next
		}
	}
}

const linkedList = new LinkedList();
linkedList.insertAtHead("a");
linkedList.insertAtTail("c");
linkedList.insertAtPositonX("b", 1);

// console.log(linkedList);
// head --> a --> b --> c --> null

// console.log(linkedList.getHead());	// a

// console.log(linkedList.getTail());	// c

// linkedList.remove('a');
// console.log(linkedList);
// head --> b --> c --> null

// linkedList.insertAtPositonX('x', 2);
// head --> a --> b --> x --> c --> null

linkedList.printAllValues();
// a b c
