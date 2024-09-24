<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    //import NavBar from './components/NavBar/NavBar.vue'
    import CustomParticles from "./components/Particles/Particles.vue"
    //import Footer from "./components/Footer/Footer.vue";
</script>
<!--
<style>
    @import './assets/main.scss';
</style>
    -->

<template>
    <header>
        <!--<NavBar />-->
    </header>
    <CustomParticles />
    <RouterView />
    <!--<footer>
        <Footer />
    </footer>-->
</template>