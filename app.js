new Vue({
  el: '#app',
  
  data () {
    return {
      cursos: [],
      title:'',
      time: null
    }
  },
  
  computed: {
    totalTime(){
      let totalTime = 0;
      this.cursos.length > 0 ?
      this.cursos.forEach(curso => { totalTime += parseInt(curso.time) }) : 0
      return totalTime
    }

  },
  
  methods: {
    addCourse(){
      let curso = { title:this.title, time:this.time }
      this.cursos.push(curso)
      this.title = ''
      this.time = 0
    }

  }
})