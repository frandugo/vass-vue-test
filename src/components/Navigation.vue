<template>
    <nav class="navigation">
        <ul :class="[main ? 'navigation__main' : '']">
            <li class="active"><a href="#">All</a></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Web</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">App</a></li>
            <li v-if="main">
                <a href="#">
                    <span class="icon__search"><img src="./../assets/icons/search.svg" alt=""></span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navigation',
    props: {
        main: Boolean
    },
}
</script>