<script>
import FormOrder from '../components/FormOrder.vue'
export default {
    components: {
        FormOrder
    }
};
</script>

<template>
    <div class="container">
        <h1>Create <span class="signin">New Order</span></h1>
        <!-- <h1>Edit CustomersInformations</h1> -->
        <FormOrder class="form" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    h1 {
        text-align: center;
        margin-top: 10vh;
    }

    .signin {
        color: #659dbd;
    }

    .form {
        margin: 0 auto;
        margin-top: 5vh;
        border: solid 1px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
}
</style>