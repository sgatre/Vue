new Vue({
	el:"#vue-app",
	data: {
		age: 30,
		x: 0,
		y: 0
	},
	methods: {
		add: function(inc) {
			this.age += inc;
		},
		subtract: function(dec) {
			this.age -= dec;
		},
		updateXY: function(event) {
			console.log(event);//从控制台日志输出
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving: function(event) {
			event.stopPropagation();
		},
		alert: function() {
			alert("Hello World");
		}
	}
});