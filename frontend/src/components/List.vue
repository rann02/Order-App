<script>
import { mapActions } from "pinia";
import { useOrderAppStore } from "../stores/index";
export default {
  props: ["order"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(useOrderAppStore, ["rupiah"]),
  },
};
</script>
<template>
  <li class="table-row">
    <div class="col col-1 action" data-label="No.">{{ order.id }}</div>
    <div class="col col-2" data-label="Photo">
      <img class="image" alt="photo" :src="order.imgUrl" />
    </div>
    <div class="col col-3 action" data-label="Product Name">
      {{ order.name }}
    </div>
    <div class="col col-4 action" data-label="Price">
      {{ rupiah(order.price) }}
    </div>
    <div class="col col-5 action" data-label="Quantity">
      {{ order.quantity }}
    </div>
  </li>
</template>
<style lang="scss" scoped>
.action {
  display: flex;
  gap: 15px;
  align-items: center;
}

.image {
  height: 8em;
  border-radius: 4px;
}

.image:hover {
  scale: 1.2;
}
</style>
