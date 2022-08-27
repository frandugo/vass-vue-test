<template>
    <section class="icons">
        <ul>
            <li>
                <a href="#" @click.prevent="filterEven()">
                    <img src="./../assets/icons/square.svg" alt="icon" />
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="filterOdd()">
                    <img src="./../assets/icons/list.svg" alt="icon" />
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'icons',
    methods: {
        filterEven: function () {
            this.$emit('filterEven')
        },
        filterOdd: function () {
            this.$emit('filterOdd')
        }
    }
}
</script>
