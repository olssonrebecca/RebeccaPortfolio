<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import NavBar from './components/NavBar/NavBar.vue'
    import CustomParticles from "./components/Particles/Particles.vue"
    import Footer from "./components/Footer/Footer.vue";
    import './assets/main.scss';
</script>

<template>
    <header>
        <NavBar />
    </header>
    <CustomParticles />
    <RouterView />
    <footer>
        <Footer />
    </footer>
</template>