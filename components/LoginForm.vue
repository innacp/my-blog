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
          v-model="user.email"
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
          v-model="user.password"
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
          @click.prevent="login"
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
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      alert("Logout successful");
    },
    async login() {
      const userTryToLogin = {
        identifier: this.user.email,
        password: this.user.password,
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
          // якщо є jwt token то записуєм його в кукі під ключом "token"
          this.$cookies.set("token", jwt, {
            // maxAge - це секунди, в данному випадку ( maxAge: 60 * 60 * 24 * 7 ) це 7 днів
            maxAge: 60 * 60 * 24 * 7,
          });
        }
        alert("login successful");
      } catch (error) {
        alert("login failed"), console.log(error);
      }
    },
  },
};
</script>