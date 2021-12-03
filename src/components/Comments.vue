<template>
  <div id="comments">
    <h5>Comment</h5>
    <div v-for="comment in comments" :key="comment.id" class="comments-box">
      <div class="comment-box">
        <h4>{{comment.name}}</h4>
        <p>{{comment.body}}</p>
        <p class="text-secondary">{{comment.email}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  computed: {
    comments () {
      return this.$store.state.comments
    }
  }
}
</script>

<style>
#comments {
    margin-inline: 40px;
    margin-bottom: 40px;
}
.comment-box {
    margin: 10px;

}
.comments-box {
  border: solid;
  border-width: 0.5px;
  background-color: rgb(245, 245, 245);
}
</style>
