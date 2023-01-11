<template>
  <div>
    <p>{{ user.name }}</p>
    <p>Post Title</p>
    <p>Post Text</p>
  </div>
</template>
  
  <script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user";

export default {
  name: "PostCard",
  middleware: ["auth"],
  data() {
    return {
      key: value,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
};
</script>