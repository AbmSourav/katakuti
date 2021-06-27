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
c.left = d
c.right = f
// console.log(binaryTree);

// ** visual structure of the tree:
//		   1
//	 	 /	 \
//	   2	  3
//	  /\	 / \
//	 4  5	4  6	


// *** In Order Traverse: left, root, right
// ==========================================

const dft_inOrder = (root) => {
	const stack = []
	let current = root
	const list = []

	while (true) {
		while (current) {
            stack.push(current)
            current = current.left
        }
        
        if (stack.length == 0) break;
        
        current = stack.pop()

        list.push(current.val)	// in order
        
        current = current.right
	}

	return list
}
// console.log(dft_inOrder(binaryTree))
// [ 4, 2, 5, 1, 4, 3, 6 ]

const dft_inOrder_recursive = (root) => {
	const list = []
	
	function dftRecursion(root) {
		if (!root) return list

		dftRecursion(root.left)
		list.push(root.val)	// in order
		dftRecursion(root.right)

		return list
	}
	dftRecursion(root)

	return list

}
console.log(dft_inOrder_recursive(binaryTree))
// [ 4, 2, 5, 1, 4, 3, 6 ]
