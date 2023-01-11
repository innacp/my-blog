import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
  state: () => ({
    post: {
      postTitle: null,
      postText: null,
    },
  }),
  actions: {
    setPost(post) {
      this.post = post;
    },
  },
});
