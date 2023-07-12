<script>
export default {};
</script>
<template>
    <li class="table-row">
        <div class="col col-1 action" data-label="No.">1</div>
        <div class="col col-2" data-label="Customer Name">
            <img class="image" alt="photo"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" />
        </div>
        <div class="col col-3 action" data-label="Customer Name">name</div>
        <div class="col col-4 action" data-label="Email">Price</div>
        <div class="col col-5 action" data-label="Phone Number">Quantity</div>
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
