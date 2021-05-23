class Dom {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const dom = new Dom('html')
const head = new Dom('head')
const meta = new Dom('meta')
const body = new Dom('body')
const container = new Dom('container')
const footer = new Dom('footer')

dom.left = head
dom.right = body
head.left = meta
body.left = container
body.right = footer
// console.log(dom);

// *** visual structure:
//		     html
//	 	  /		   \
//	   head	 	   	body
//	  /	  		  /	     \
//  meta  	 container	  footer
