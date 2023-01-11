<template>
  <div>
    <h1>Post 1</h1>
    <p>{{ user }}</p>
    <p>{{ postTitle }}</p>
    <p>post text</p>
  </div>
</template>
  
  <script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/user";
import { usePostStore } from "@/stores/post";

export default {
  name: "PostCard",
  middleware: ["auth"],
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(usePostStore, ["post"]),
  },
  methods: {
    ...mapActions(usePostStore, ["setPost"]),
    getUserPost() {
      try {
        const result = this.$axios.get("/api/posts");
        console.log(result);
      } catch {
        console.log(error);
      }
    },
  },
};
</script>