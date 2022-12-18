<template>
  <div>
    <form action="#">
      <div>
        <label for="email"></label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          v-model="userEmail"
        />
      </div>
      <div>
        <label for="password"></label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          v-model="userPassword"
        />
      </div>
      <button type="submit" @click="sendForm">Log in</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      userEmail: null,
      userPassword: null,
    };
  },
  methods: {
    async sendForm() {
      const userTrytoLogin = {
        identifier: this.userEmail,
        password: this.userPassword,
      };
      try {
        const {
          data: { jwt },
        } = await axios.post("api/auth/local", userTrytoLogin);
        console.log(jwt);
        if (jwt) {
          localStorage.setItem("token", jwt);
        }
        alert("login success");
      } catch (error) {
        alert("login failed");
        console.log(error);
      }
    },
  },
};
</script>