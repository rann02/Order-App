<script>
import List from "../components/List.vue";
export default {
    components: {
        List,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<template>
    <div class="cover-home">
        <div class="left-side">
            <div class="cover-total">
                <h1 class="total">
                    Total Price
                </h1>
                <button>Price</button>
            </div>
        </div>
        <div class="container-order">
            <h2>Order Lists</h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">No.</div>
                    <div class="col col-2">Photo</div>
                    <div class="col col-3">Name</div>
                    <div class="col col-4">Price</div>
                    <div class="col col-5">Quantity</div>
                </li>
                <List />
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cover-home {
    display: flex;

    .left-side {
        flex-basis: 18%;
        margin-top: 80px;

        .cover-total {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            border: solid 1px rgba(0, 0, 0, 0.15);
            margin-left: 30px;
            padding: 20px;
            padding-bottom: 30px;
            margin-right: 20px;
            border-radius: 4px;
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        }

        .total {
            font-size: 1.5rem;
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
    }
}
</style>
