// JavaScript don't have a build in Stack type.
// But we can implement Stack structure in two ways.

// 1. creating a stack using Array
const arr = [ "a", "b", "c" ];
arr.push("d");
arr.pop();


// 2. *** Now let's create a custom Stack Structure.
// a linked list class
class Book {
	constructor(name) {
		this.name = name;
		this.next = null;
	}
}

// main stack class
class Stack {
	constructor() {
		this.top = null;
	}

	push(bookName) {
		if (this.top === null) {
			this.top = new Book(bookName);
		} else {
			const book = new Book(bookName);
			book.next = this.top
			this.top = book
		}
	}

	pop() {
		if (this.top === null) return null;

		const topItem = this.top
		this.top = this.top.next
		return topItem.name;
	}
}

const stack = new Stack();
stack.push('Sherlock Holmes');
stack.push('Himu');
stack.push('Tin Goyenda');
// 	|	Tin Goyenda		|
// 	|		Himu		|
// 	|	Sherlock Holmes	|
// ======================

console.log(stack.pop());	// Tin Goyenda
console.log(stack);
// 	|		Himu		|
// 	|	Sherlock Holmes	|
// ======================
