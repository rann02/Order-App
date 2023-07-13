<script>
import { useOrderAppStore } from "../stores/index";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapWritableState(useOrderAppStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useOrderAppStore, ["login", "showAlert", "showWarning"]),
    async loginTriger() {
      try {
        const { data } = await this.login({
          username: this.username,
          password: this.password,
        });
        localStorage.setItem("access_token", data.token);
        this.isLogin = true;
        this.$router.push("/create-order");
        this.showAlert();
      } catch (error) {
        this.showWarning(error.response.data.message);
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="loginTriger" class="container">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button class="submit">SIGN IN</button>
  </form>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 7px;
  padding: 40px;

  input {
    width: 100%;
    border: none;
    height: 3em;
    transition: 0.2s;
    outline: 0;
    border-radius: 4px;
    padding: 10px;
  }

  input:focus {
    outline: solid 1.5px #4056a1;
  }

  button {
    align-items: center;
    background-color: #659dbd;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    height: 2rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 15em;
  }

  button:hover {
    transform: translateY(-1px);
  }

  button:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  button:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }

  .submit {
    width: 100%;
    color: #fff;
  }
}
</style>
