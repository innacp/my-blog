<template>
  <div>
    <form class="registration-form" action="#">
      <div>
        <label for="username">Your username</label>
        <input type="text" v-model="form.username" />
      </div>
      <div>
        <label for="email">Your email</label>
        <input type="email" v-model="form.email" />
      </div>
      <div>
        <label for="password">Your password</label>
        <input type="password" v-model="form.password" />
      </div>
      <div>
        <label for="confirm">Confirm your password</label>
        <input type="password" v-model="form.confirmPassword" />
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