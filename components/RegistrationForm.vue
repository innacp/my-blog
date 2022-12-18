<template>
  <div>
    <form class="max-w-[250px] flex flex-col gap-x-1 mb-[10px]" action="#">
      <div class="w-full">
        <label for="username" class="text-sm mb-[5px] inline-block"
          >Username</label
        >
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          v-model="form.username"
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
      </div>
      <div class="w-full">
        <label for="email" class="text-sm mb-[5px] inline-block">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          v-model="form.email"
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
      </div>
      <div class="w-full">
        <label for="password" class="text-sm mb-[5px] inline-block"
          >Password</label
        >
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          v-model="form.password"
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
      </div>
      <div class="w-full">
        <label for="confirm" class="text-sm mb-[5px] inline-block"
          >Confirm Password</label
        >
        <input
          id="confirm"
          type="password"
          name="confirm"
          placeholder="Confirm password"
          v-model="form.confirmPassword"
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
      </div>
    </form>
    <div class="grid place-content-center">
      <button
        type="submit"
        @click="send"
        class="bg-orange-500 rounded-full py-[0px] px-[20px]"
      >
        Sign up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async send() {
      try {
        const res = await this.$axios.post("/api/auth/local/register", {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>