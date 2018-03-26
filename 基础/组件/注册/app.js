//注册组件
Vue.component('my-component', {
	// 选项
	template: '<div>A custom component</div>'
})

//创建根实例
new Vue({
	el: '#example'
})

var Child = {
	template: '<div>A custom component 局部组件</div>'
}

new Vue({
	// ...
	component: {
		// <my-component> 将只在父组件模板中可用
		'my-component': Child
	}
})