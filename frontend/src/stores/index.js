import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
export const useOrderAppStore = defineStore("appStore", {
  state: () => ({
    api: "http://localhost:3000",
    products: [],
    orders: [],
    isLogin: false,
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.api}/products`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.products = data;
      } catch (error) {
        if (!!error.response.data.message) {
          this.showWarning(error.response.data.message);
        }
        console.log(error.message);
      }
    },
    async fetchOrders() {
      try {
        const { data } = await axios({
          method: "GET",
          headers: { access_token: localStorage.getItem("access_token") },
          url: `${this.api}/orders`,
        });
        this.orders = data;
      } catch (error) {
        if (!!error.response.data.message) {
          this.showWarning(error.response.data.message);
        }
        console.log(error.message);
      }
    },
    createOrder(dataOrder) {
      return axios({
        method: "POST",
        url: `${this.api}/order`,
        headers: { access_token: localStorage.getItem("access_token") },
        data: dataOrder,
      });
    },
    login(dataLogin) {
      return axios({
        method: "POST",
        url: `${this.api}/users/login`,
        data: dataLogin,
      });
    },
    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
    showAlert() {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "success",
        title: `Welcome!`,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    showWarning(message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    },
    showOrderAlert(message) {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
});
