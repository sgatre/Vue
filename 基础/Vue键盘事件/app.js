new Vue({
	el:"#vue-app",
	data:{
		name: "gaster",
		age: ""
	},
	methods:{
		logName: function() {
			//console.log("你正输入名字")
			//this.name = this.$refs.name.value;
			//console.log(this.$refs.name.value);
		},
	
	logAge: function() {
			//console.log("你正输入年龄");
			//this.age = this.$refs.age.value;
		}
	}
});