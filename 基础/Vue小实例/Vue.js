new Vue({
	el: "#vue-app",
	data:{
		name: "Gaster",
		job: "web开发",
		website: "http://www.github.com/wangtianzhi",
		websiteTag: "<a href='http://www.github.com/wangtianzhi'>王天智的GitHub</a>"
	},
	methods:{
		greet: function(time){
			return 'Good' + " " +time + " " + this.name + "!";
		}
	}
});

/*
 * el: element 需要获取的元素，一定是html中的根容器元素
 * data：用于数据的存储
 * methods：用于方法的存储
 * v-binding: 给属性绑定对应的值
 * v-html: 绑定标签
 */