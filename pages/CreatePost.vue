<template>
  <div>
    <form class="max-w-[250px] flex flex-col gap-x-1 mb-[10px]" action="#">
      <input
        name="title"
        type="text"
        placeholder="Title"
        v-model="form.postTitle"
        class="
          border
          rounded-sm
          border-gray-300
          text-xs
          w-full
          outline-none
          h-7
          mb-[5px]
        "
      />
      <input
        name="text"
        type="text"
        placeholder="Text"
        v-model="form.postText"
        class="
          border
          rounded-sm
          border-gray-300
          text-xs
          w-full
          outline-none
          h-7
          mb-[5px]
        "
      />
    </form>
    <div class="grid place-content-center">
      <button
        type="submit"
        @click="submitPost"
        class="bg-orange-500 rounded-full py-[0px] px-[20px]"
      >
        Publish
      </button>
    </div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>
  
  <script>
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user";

export default {
  name: "CreatePost",
  middleware: ["auth"],
  data() {
    return {
      form: {
        postTitle: "",
        postText: "",
      },
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  methods: {
    async submitPost() {
      const token = this.$cookies.get("token");
      try {
        const result = await this.$axios.post(
          "/api/posts",
          {
            data: {
              title: this.form.postTitle,
              text: this.form.postText,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(result);
        // redirect("/PostCard");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>