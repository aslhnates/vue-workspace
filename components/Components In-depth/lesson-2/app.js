let blogPostComponent = {
  props ['id'],
  data(){
    return {
      blogPost: null
    }
  },
  created () {
    axios.get('api/post' + this.id).then(response => {
      this.blogPost = response.data
    })
  }
}