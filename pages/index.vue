<template>
  <div>
    <h1>Hello world</h1>
    <button>Create Post</button>
    <PostForm />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    this.getHotels();
  },
  methods: {
    async getHotels() {
      const res = await this.$axios.get("/api/posts");
      console.log(res);
    },
  },
};
</script>
