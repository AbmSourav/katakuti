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
// b.right = e
// c.left = d
// c.right = f
// console.log(binaryTree);

// ** visual structure of the tree:
//		   1
//	 	 /	 \
//	   2	  3
//	  /\	 / \
//	 4  5	4  6	


// *** Post Order Traverse: left, right, root
// ==========================================

const dft_postOrder = (root) => {
	const stack = [root]
	let prevNode = null
	const list = []

	while (stack.length > 0) {
		let current = stack[stack.length - 1]

		if (prevNode === null || prevNode.left == current || prevNode.right == current) {
			if (current.left) {
				stack.push(current.left)
			} else if (current.right) {
				stack.push(current.right)
			} else {
				stack.pop()
				list.push(current.val)
			}
		} else if (current.left == prevNode) {
			if (current.right != null) {
                stack.push(current.right);
			} else {
				stack.pop();
				list.push(current.val);
            }
		} else if (current.right == prevNode) {
			stack.pop();
			list.push(current.val);
		}

		prevNode = current
	}

	return list
}
// console.log(dft_postOrder(binaryTree))
// [ 4, 5, 2, 4, 6, 3, 1 ]

// ** visual structure of the tree:
//		         1
//	 	     /	     \
//	       2	       3
//	    /    \	     /   \
//	  4    null   null  null	
//  /   \  
// null  null

const dft_postOrder_recursive = (root) => {
	const list = []
	// list = [4, 2, 3, 1]
	
	function dftRecursion(root) {
		if (!root) return list

		dftRecursion(root.left)
		dftRecursion(root.right)
		list.push(root.val)	// post order

		return list
	}
	dftRecursion(root)

	return list

}
console.log(dft_postOrder_recursive(binaryTree))
// [4, 2, 3, 1]
