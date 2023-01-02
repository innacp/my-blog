<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/PostForm">Create Post</NuxtLink>
      <NuxtLink to="/Login">Sign Up/Login</NuxtLink>
      <PostForm />
    </nav>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  // mounted() {
  //   this.getHotels();
  // },
  // methods: {
  //   async getHotels() {
  //     const res = await this.$axios.get("/api/posts");
  //     console.log(res);
  //   },
  // },
};
</script>
