<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/CreatePost">Create Post</NuxtLink>
      <NuxtLink to="/Login">Sign Up/Login</NuxtLink>
      <NuxtLink to="/PostCard">User Post</NuxtLink>
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
