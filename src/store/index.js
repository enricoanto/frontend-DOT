import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    comments: [],
    users: []
  },
  mutations: {
    FETCH_POSTS (state, payload) {
      state.posts = payload
    },
    FETCH_POST (state, payload) {
      state.post = payload
    },
    FETCH_POST_COMMENTS (state, payload) {
      state.comments = payload
    },
    FETCH_USERS (state, payload) {
      state.users = payload
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
          commit('FETCH_POSTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPost ({ commit }, payload) {
      Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
        .then(({ data }) => {
          commit('FETCH_POST', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPostComments ({ commit }, payload) {
      Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`)
        .then(({ data }) => {
          commit('FETCH_POST_COMMENTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchUsers ({ commit }) {
      Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
          commit('FETCH_USERS', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
