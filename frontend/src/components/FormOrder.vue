<script>
import { useOrderAppStore } from "../stores/index";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      productId: 0,
      price: 0,
      quantity: 0,
    };
  },
  computed: {
    ...mapWritableState(useOrderAppStore, ["products"]),
  },
  methods: {
    ...mapActions(useOrderAppStore, [
      "fetchProducts",
      "createOrder",
      "showOrderAlert",
      "showWarning",
    ]),
    async orderTriger() {
      try {
        const { data } = await this.createOrder({
          productId: this.productId,
          price: this.price,
          quantity: this.quantity,
        });
        this.productId = 0;
        this.price = 0;
        this.quantity = 0;
        this.showOrderAlert(data.message);
      } catch (error) {
        this.showWarning(error.response.data.message);
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<template>
  <form class="container" @submit.prevent="orderTriger">
    <select v-model="productId">
      <option disabled value="0">Select one:</option>
      <option v-for="(product, idx) in products" :key="idx" :value="product.id">
        {{ product.name }}
      </option>
    </select>
    <input
      v-model="price"
      type="number"
      class="col1"
      min="0"
      placeholder="Price"
    />
    <input
      v-model="quantity"
      type="number"
      class="col2"
      min="0"
      placeholder="Quantity"
    />
    <button class="submit">SUBMIT</button>
  </form>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 50vw;
  gap: 15px;
  padding: 40px;
  align-items: center;

  input {
    border: none;
    height: 3em;
    transition: 0.2s;
    outline: 0;
    border-radius: 4px;
    padding: 10px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  select {
    background-color: #fff;
    width: 100%;
    border: none;
    height: 3em;
    transition: 0.2s;
    outline: 0;
    border-radius: 4px;
    padding: 10px;
  }

  .col1 {
    width: 80%;
  }

  .col2 {
    width: 30%;
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
    font-size: 16px;
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
    width: 40%;
    color: #fff;
    height: 2.4em;
  }
}
</style>
