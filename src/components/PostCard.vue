<template>
  <div class="overflow-auto" id="PostCard">
    <div class="pag-search mt-4">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <div>
         <b-form-input v-model="search" placeholder="Search title, post or email"></b-form-input>
      </div>
    </div>
    <div class="posts-box"></div>
    <div v-for="post in postsPerPage" :key="post.id">
      <div class="post-box">
        <div class="title-box">
          <p class="post-title">{{post.title}}</p>
          <b-button variant="outline-primary" @click="changePage(post.id)">Detail</b-button>
        </div>
        <p class="post-body">{{post.body}}</p>
        <div>
          <p class="email-text mb-0 mt-2">{{post.post_user.email}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  components: {},
  data () {
    return {
      perPage: 10,
      currentPage: 1,
      search: '',
      posts: []
    }
  },
  methods: {
    changePage (id) {
      this.$router.push(`post/${id}`)
    }
  },
  created () {
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchPosts')
  },
  computed: {
    filterPosts () {
      let postsPerPage = this.$store.state.posts
      if (this.search) {
        postsPerPage = postsPerPage.filter(
          el =>
            el.title.toLowerCase().includes(this.search) ||
            el.body.toLowerCase().includes(this.search) || el.post_user.email.toLowerCase().includes(this.search)
        )
      }
      postsPerPage.map(el => {
        this.user.forEach(user => {
          if (el.userId === user.id) {
            el.post_user = user
          }
        })
      })
      return postsPerPage
    },
    user () {
      return this.$store.state.users
    },
    rows () {
      return this.filterPosts.length
    },
    postsPerPage () {
      const postsPerPage = this.filterPosts.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
      return postsPerPage
    }
  }
}
</script>

<style>
.posts-box {
  border: solid;
  border-color: gray;
  border-width: 1px;
  margin: 0 40px 40px 40px;
}
.post-box {
  border-bottom: solid;
  margin: 40px;
  border-width: 0.5px;
  border-color: rgb(196, 195, 195);
}
.title-box {
  display: flex;
  justify-content: space-between;
}
.post-title {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
  margin: 0;
  font-weight: 600;
}
.post-body {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
  margin: 0;
}
.email-text {
  justify-self: flex-end;
}
.pag-search {
  display: flex;
  justify-content: space-around;
}
</style>
