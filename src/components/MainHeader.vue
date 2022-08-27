
<template>
    <header>
        <h1 class="logo">
            <img src="./../assets/logo.jpg" alt="logo" />
        </h1>
        <Navigation main />
    </header>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
    name: 'main-header',
    components: {
        Navigation,
    },
    props: {
    },
}
</script>
<style scoped>
.items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;
    gap: 10px;
}
</style>
