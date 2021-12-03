<template>
  <div>
    <div class="posts-box"></div>
    <div class="post-box">
      <div class="title-box">
        <p class="post-title">{{post.title}}</p>
      </div>
      <p class="post-body">{{post.body}}</p>
    </div>
    <Comments/>
  </div>
</template>

<script>
import Comments from '../components/Comments'
export default {
  name: 'PostDetail',
  components: {
    Comments
  },
  created () {
    this.$store.dispatch('fetchPost', this.$route.params.id)
    this.$store.dispatch('fetchPostComments', this.$route.params.id)
  },
  computed: {
    post () {
      return this.$store.state.post
    }
  }
}
</script>

<style>
</style>
