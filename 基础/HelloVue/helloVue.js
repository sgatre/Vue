var app = new Vue({
	el: '#app-2',
	data: {
		message: '页面加载于' + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{text: '学习 JavaScript'},
			{text: 'xuexi Vue'},
			{text: 'Fuck you'}
		]
	}
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		messag: 'Hello Vue.js-5'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

