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

// ** visual structure of the tree:
//		   1
//	 	 /	\
//	   2	 3
//	  /\	  \
//	 4  5	  6	


/**
 * Search in a binary tree using Breadth First algorithim
 * Time complexity: O(n)
 * Space complexity: O(n)
 * 
 * @param {object} root - Tree root
 * @param searchValue - Tree node
 * @returns boolean
 */
const breadthFirstSearch = (root, searchValue) => {
	const queue = [root];

	while ( queue.length > 0 ) {
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
breadthFirstSearch(binaryTree, 4);	// true
// console.log(breadthFirstSearch(binaryTree, 50));	// false
