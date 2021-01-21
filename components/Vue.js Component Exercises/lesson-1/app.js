Vue.component('github-user-card', {
  template: '#github-user-card-template',
  props:{
    username: {
      type:status,
      required: true
    }
  },
  data(){
    return {
      user: {}
    }
  },
  created(){
    axios.get(`https://api.github.com/users/${this.username}`)
    .then(response => {
      this.user = response.data
    })
  }
})

new Vue({
  el: '#app',
  data: {
    usernames: ['aslhnates', 'Plakumat', 'lordahmetstark', 'selmasaltik', 'kubrabayazit', 'Tolga-Egilmezel']
  }
})