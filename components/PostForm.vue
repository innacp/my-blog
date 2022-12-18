<template>
  <div>
    <form action="#">
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
        "
      />
    </form>
    <div class="grid place-content-center">
      <button
        type="submit"
        @click="submit"
        class="bg-orange-500 rounded-full py-[0px] px-[20px]"
      >
        Publish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      form: {
        postTitle: "",
        postText: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        const result = await this.$axios.post("/api/posts", {
          title: this.form.postTitle,
          text: this.form.postText,
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>