<script setup>
    import OpenIcon from '../icons/IconOpen.vue';

    defineProps({
        imgSrc: String,
        title: String,
        techs: String,
        description: String,
        link: {
            type: String,
            default: null
        },
        linkText: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <div class="project-item">
        <img :src="imgSrc" alt="Project image" />
        <div class="project-text">
            <h2>{{ title }}</h2>
            <div class="tech-row">
                <span v-for="tech in techs.split(',')" :key="tech" class="tech-box">{{ tech.trim() }}</span>
            </div>
            <p>{{ description }}</p>
            <a v-if="link" :href="link" target="_blank">{{ linkText }}<OpenIcon /></a>
        </div>
    </div>
</template>