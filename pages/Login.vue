<template>
  <div class="bg-white rounded-lg shadow-md max-w-sm">
    <div>
      <button
        class="bg-slate-400 rounded-full py-0 px-[20px] text-white"
        @click="tab = 'register'"
      >
        Register
      </button>
      <button
        class="bg-slate-400 rounded-full py-0 px-[20px] text-white"
        @click="tab = 'login'"
      >
        Log in
      </button>
    </div>
    <div>
      <RegistrationForm v-if="tab === 'register'" />
      <LoginForm v-if="tab === 'login'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      tab: "login",
    };
  },
  methods: {},
};
</script>