<script>
import Form from '../components/Form.vue'
export default {
    components: {
        Form
    }
};
</script>

<template>
    <div class="container">
        <h1>Hello, please <span class="signin">sign in</span> before!</h1>
        <!-- <h1>Edit CustomersInformations</h1> -->
        <Form class="form" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    h1 {
        text-align: center;
        margin-top: 20vh;
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
