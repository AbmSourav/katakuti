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

// sum all binary tree nodes using Breadth First algorithim
const sumTree = root => {
	const queue = [root]
	let total = 0

	while ( queue.length > 0 ) {
		const current = queue.shift()
		total += current.val

		if ( current.left ) {
			queue.push(current.left)
		}

		if ( current.right ) {
			queue.push(current.right)
		}
	}

	return total
}
console.log(sumTree(binaryTree));
