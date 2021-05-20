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
// Breadth First algorithim
// Description: it starts from the root of the tree and explore all the nodes.

const breadthFirstPrint = root => {
	const queue = [root];
	// console.log(queue)

	while ( queue.length > 0 ) {
		const current = queue.shift()
		console.log(current.val)

		if ( current.left ) {
			queue.push(current.left)
			console.log(current.left.val);
		}

		if ( current.right ) {
			queue.push(current.right)
		}
	}
	// console.log(queue)
}
// breadthFirstPrint(binaryTree);


// Node {
// 	val: 1,
// 	left: Node {
// 	  val: 2,
// 	  left: Node { val: 4, left: null, right: null },
// 	  right: Node { val: 5, left: null, right: null }
// 	},
// 	right: Node {
// 	  val: 3,
// 	  left: null,
// 	  right: Node { val: 5, left: null, right: null }
// 	}
// }

// ** visual structure:
//		   1
//	 	 /	\
//	   2	 3
//	  /\	  \
//	 4  5	  6	
const breadthFirstSearch = (root, searchValue) => {
	// data structure that have been use in Breath First is "Queue".
	// and Queue uses FIFO method for data manipulation.
	const queue = [root];

	while ( queue.length > 0 ) {
      
      	// shift() function is the key for FIFO and makes it a Queue.
		// if you use pop() then it'll become a LIFO and the array will become a Stack 
      	// But Breath First uses Queue.
		const current = queue.shift()

        // if search value found then just return here.
		if ( current.val === searchValue ) {
			return true;
		}

      	// push back inner nodes of the tree in the queue.
		if ( current.left ) {
			queue.push(current.left)
		}
		if ( current.right ) {
			queue.push(current.right)
		}
	}
  
 	// if search value not found and visited all nodes then return here.
	return false
}
breadthFirstSearch(binaryTree, 4);
// console.log(breadthFirstSearch(binaryTree, 50));

// sum all nodes with Breadth First algorithim
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
