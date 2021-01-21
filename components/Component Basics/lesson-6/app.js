
let planComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required:true
    }
  },
  data(){
    return {
      selected: false
    }
  },
  methods: {
    select(){
      this.selected = true
    }
  }
}



let planPickerComponent = {
  template: '#plan-picker-template',
  component: {
    plan: planComponent
  },
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  }
}



new Vue({
  el: '#app',
  component: {
    'plan-picker': planPickerComponent
  }
})