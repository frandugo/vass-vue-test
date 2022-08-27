
<template>
    <footer>
        <p class="copyright">@ 2016 - <a href="#">Sneak</a> All Right Reserved</p>
        <div class="social">
            <ul>
                <li><a href="#"><img src="./../assets/icons/facebook.svg" alt=""></a></li>
                <li><a href="#"><img src="./../assets/icons/twitter.svg" alt=""></a></li>
                <li><a href="#"><img src="./../assets/icons/instagram.svg" alt=""></a></li>
            </ul>
        </div>
    </footer>
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
