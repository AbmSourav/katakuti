// Binary tree
class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const binaryTree = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

binaryTree.left = b
binaryTree.right = c
b.left = d
b.right = e
c.right = f
// console.log(binaryTree);

// ** visual structure of the tree:
//		   1
//	 	 /	\
//	   2	 3
//	  /\	  \
//	 4  5	  6	

// Breadth First algorithim
// Description: it starts from the root of the tree and explore all the nodes.
const breadthFirstPrint = root => {
	const queue = [root];

	while ( queue.length > 0 ) {
		const current = queue.shift();

		if ( current.left ) {
			queue.push(current.left)
			// console.log(current);
		}

		if ( current.right ) {
			queue.push(current.right)
			// console.log(current);
		}
	}
}
breadthFirstPrint(binaryTree);


// sum all binary tree nodes using Breadth First algorithim
const sumTree = root => {
	const queue = [root]
	let sum = 0

	while ( queue.length > 0 ) {
		const current = queue.shift()
		sum += current.val

		if ( current.left ) {
			queue.push(current.left)
		}

		if ( current.right ) {
			queue.push(current.right)
		}
	}

	return sum
}
// console.log(sumTree(binaryTree));
