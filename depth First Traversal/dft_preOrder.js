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


// *** Pre Order Traverse: root, left, right
// ==========================================

const dft_preOrder = (root) => {
	const stack = [root]
	const list = []

	while (stack.length > 0) {
		const current = stack.pop()

		list.push(current.val)	// pre order

		if (current.right) {
			stack.push(current.right)
		}
		if (current.left) {
			stack.push(current.left)
		}
	}

	return list
}
// console.log(dft_preOrder(binaryTree))
// [ 1, 2, 4, 5, 3, 6 ]

const dft_preOrder_recursive = (root) => {
	const list = []
	
	function dftRecursion(root) {
		if (!root) return list

		list.push(root.val)	// pre order
		dftRecursion(root.left)
		dftRecursion(root.right)

		return list
	}
	dftRecursion(root)

	return list

}
console.log(dft_preOrder_recursive(binaryTree))
// [ 1, 2, 4, 5, 3, 6 ]
