<script>
import List from "../components/List.vue";
import { useOrderAppStore } from "../stores/index";
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  components: {
    List,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useOrderAppStore, ["orders"]),
  },
  methods: {
    ...mapActions(useOrderAppStore, ["fetchOrders", "rupiah"]),
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.orders.length; i++) {
        total += this.orders[i].price * this.orders[i].quantity;
      }
      return total;
    },
  },
  created() {
    this.fetchOrders();
  },
};
</script>

<template>
  <div class="cover-home">
    <div class="left-side">
      <div class="cover-total">
        <h2 class="total">Total Price</h2>
        <button>{{ rupiah(totalPrice()) }}</button>
      </div>
    </div>
    <div class="container-order">
      <h1>Order Lists</h1>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">No.</div>
          <div class="col col-2">Photo</div>
          <div class="col col-3">Name</div>
          <div class="col col-4">Price</div>
          <div class="col col-5">Quantity</div>
        </li>
        <List v-for="(order, idx) in orders" :key="idx" :order="order" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover-home {
  display: flex;

  .left-side {
    width: 20rem;
    margin-top: 80px;

    .cover-total {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      border: solid 1px rgba(0, 0, 0, 0.15);
      margin-left: 30px;
      padding: 15px;
      margin-right: 20px;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }

    .total {
      font-size: 1.5em;
    }

    button {
      align-items: center;
      background-color: #659dbd;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-size: 18px;
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
      width: 100%;
    }

    button:hover {
      transform: translateY(-1px);
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 2vh;
  }
}
</style>
