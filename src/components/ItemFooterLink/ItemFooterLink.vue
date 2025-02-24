<script setup>
    defineProps({
        href: String,
        title: String,
        iconComponent: Object,
        download: {
            type: String,
            default: null
        }
    })
</script>

<template>
    <a :href="href" :download="download" target="_blank" rel="noopener noreferrer" class="contact-icons" :data-title="title">
        <component :is="iconComponent" />
    </a>
</template>