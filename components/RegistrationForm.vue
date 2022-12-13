<template>
  <div>
    <form class="max-w-[300px] flex flex-col gap-x-1" action="#">
      <div class="w-full">
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          v-model="form.username"
          class="border rounded-sm border-gray-300 text-xs w-full"
        />
      </div>
      <div class="w-full">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          v-model="form.email"
          class="border rounded-sm border-gray-300 text-xs w-full"
        />
      </div>
      <div class="w-full">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          v-model="form.password"
          class="border rounded-sm border-gray-300 text-xs w-full"
        />
      </div>
      <div class="w-full">
        <label for="confirm">Confirm Password</label>
        <input
          id="confirm"
          type="password"
          name="confirm"
          placeholder="Confirm password"
          v-model="form.confirmPassword"
          class="border rounded-sm border-gray-300 text-xs w-full"
        />
      </div>
    </form>
    <button @click="send">Send</button>
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