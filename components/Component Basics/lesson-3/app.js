Vue.component('plan', {
  template: '#plan-template',
  // props: ['name']

  props: {
    name: {  // burayı sor?
      type: String,
      required: true
    }
  }
})


new Vue({
  el: '#app',
  data: {
    plans: ['The Single', 'The Curious', 'The Addict']
  }
})