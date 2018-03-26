var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: '赶紧输入'
  },
  watch: {
    question: function( newQuestion, oldQuestion) {
      this.answer = "等你输完"
      this.getAnswer()
      console.log(newQuestion);
      console.log(oldQuestion);
    }
  },
  methods: {
    // _.debounce 是一个通过Lodash限制操作频率的函数
    getAnswer: _.debounce(
      function() {
        if(this.question.indexOf('?') === -1) {
          this.answer="你得加个?"
          return
        }
        this.answer = '正在想'
        var vm = this
       
        axios.get('https://yesno.wtf/api')
          .then(function(response) {
            vm.answer = _.capitalize(response.data.answer) //大小写过滤器
          })
          .catch(function(error) {
            vm.amswer = "Error!" +error
          })
      },
      // 判定用户停止输入等待的毫秒数
      500
      )
  }
})