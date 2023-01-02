<template>
  <div>
    <form action="#">
      <div>
        <label for="email" class="text-sm mb-[5px] inline-block"
          >Enter email</label
        >
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          v-model="userEmail"
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
      <div class="mb-[5px]">
        <label for="password" class="text-sm mb-[5px] inline-block"
          >Enter password</label
        >
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          v-model="userPassword"
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
      <div class="grid place-content-center">
        <button
          type="submit"
          @click.prevent="sendForm"
          class="bg-orange-500 rounded-full py-[0px] px-[20px]"
        >
          Log in
        </button>
      </div>
    </form>
    <button @click="logout">Log out</button>
  </div>
</template>


<script>
export default {
  name: "LoginForm",
  data() {
    return {
      userEmail: null,
      userPassword: null,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      alert("Logout successful");
    },
    async sendForm() {
      const userTryToLogin = {
        identifier: this.userEmail,
        password: this.userPassword,
      };
      try {
        // const {
        //   data: { jwt },  //jwt from data object from response object
        // } = await this.$axios.post("/api/auth/local", userTryToLogin);

        const res = await this.$axios.post("/api/auth/local", userTryToLogin);
        const { data } = res; //data from res object

        const { jwt } = data; //jwt from  data object// better use this

        console.log(jwt);
        console.log(res.data.user);
        if (jwt) {
          localStorage.setItem("token", jwt);
        }
        alert("login successful");
      } catch (error) {
        alert("login failed"), console.log(error);
      }
    },

    // async sendForm() {
    //   try {
    //     const res = await this.$axios.post("/api/auth/local", {
    //       identifier: this.userEmail,
    //       password: this.userPassword,
    //     });

    //     console.log("login successful");
    //     console.log(res.data.user);
    //     console.log(res.data.jwt);
    //   } catch (error) {
    //     console.log("login failed");
    //     console.log(error.res);
    //   }
    // },
  },
};
</script>