const app = new Vue({
	el: '#app',
	data: {
		books: [{
			id: 1,
			name: 'suanfa',
			date: '2005-9',
			price: 190,
			count: 1
		},{
			id: 2,
			name: 'unix',
			date: '2005-9',
			price: 220,
			count: 1
		},{
			id: 3,
			name: 'java',
			date: '2005-9',
			price: 365,
			count: 1
		},{
			id: 4,
			name: 'python',
			date: '2005-9',
			price: 122,
			count: 1
		}]
	},
	methods: {
		getFinalPrice(price) {
			return '￥' + price.toFixed(2)
		},
		decrement(index) {
			this.books[index].count--
		},
		increment(index) {
			this.books[index].count++
		},
		removeHandle(index) {
			this.books.splice(index,1)
		}
	},
	filters: {
		showPrice(price) {
			return '￥' + price.toFixed(2)
		}
	},
	computed: {
		totalPrice() {
			// 1.普通的for循环
			// let totalPrice = 0
			// for(let i = 0; i < this.books.length; i++) {
			// 	totalPrice += this.books[i].price * this.books[i].count
			// }
			// return totalPrice
			// 
			// // 2.for in
			// let totalPrice = 0
			// for(let i in this.books) {
			// 	totalPrice += this.books[i].price * this.books[i].count
			// }
			// return totalPrice
			// 
			// // 3.for of
			// let totalPrice = 0
			// for(let item of this.books) {
			// 	totalPrice += item.price * item.count
			// }
			// return totalPrice
			
			// reduce
			return this.books.reduce(function(pre, book) {
				return pre + book.price * book.count
			}, 0)
		}
	}
})


// fliter中的回调函数有一个要求:必须返回一个Boolean值,
// 当返回true时,函数内部会自动将这次回调的n加入到新的数组中
// 当返回false时,函数内部会过滤掉这次的n
// let newArr = arr.filter(function(n) {
// 	return
// })
// 
// reduce函数的使用
// reduce作用对数组中所有的内容进行汇总
// let total = newNum.reduce(function(prevalue,n) {
// 	return prevalue + n
// }, 0)