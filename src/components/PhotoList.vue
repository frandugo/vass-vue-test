<template>
    <section class="items" v-if="!loading">
        <div class="wrapper">
            <div class="items__container">
                <div class="items__image" v-for="{ url, title } in photos">
                    <img :src="url" :alt="title">
                </div>
                <span v-if="loading">
                    Loading Photos
                </span>
            </div>
            <div class="items__load">
                <a href="#" @click.prevent="loadMoreData()" class="btn btn__medium btn__pink">
                    Show Me More
                </a>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Photos',
    props: {
        loading: Boolean,
        photos: Array
    },
    methods: {
        loadMoreData: function () {
            this.$emit('loadMoreData')
        }
    }
}
</script>
<style scoped lang="scss">
.items {
    &__container {
        display: grid;
        grid-template-columns: repeat(3, minmax(300px, 1fr));
        grid-auto-flow: dense;
        gap: 10px;
    }

    &__image {
        img {
            object-fit: fill;
            width: 100%;
        }
    }

    &__load {
        padding: 50px 0;
        text-align: center;
    }
}
</style>
