const {Tree} = require('./binaryTree')

const binaryTree = new Tree(1);
const b = new Tree(2);
const c = new Tree(3);
const d = new Tree(4);
const e = new Tree(5);
const f = new Tree(6);

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
	// data structure that have been use in Breath First is "Queue".
	// and Queue uses FIFO method for data manipulation.
	const queue = [root];

	while ( queue.length > 0 ) {

		// shift() function is the key for FIFO and makes it a Queue.
		// if you use pop() then it'll become a LIFO and the array will become a Stack 
      	// But Breath First uses Queue.
		const current = queue.shift();

		if ( current.left ) {
			queue.push(current.left)
			// console.log(current);
		}

		// push back inner nodes of the tree in the queue.
		if ( current.right ) {
			queue.push(current.right)
			// console.log(current);
		}
	}
}
breadthFirstPrint(binaryTree);
