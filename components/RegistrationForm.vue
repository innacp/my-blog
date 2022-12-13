<template>
  <div>
    <form class="w-full" action="#">
      <div>
        <label for="username">Your username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          v-model="form.username"
        />
      </div>
      <div>
        <label for="email">Your email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          v-model="form.email"
        />
      </div>
      <div>
        <label for="password">Your password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          v-model="form.password"
        />
      </div>
      <div>
        <label for="confirm">Confirm your password</label>
        <input
          id="confirm"
          type="password"
          placeholder="Confirm password"
          v-model="form.confirmPassword"
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