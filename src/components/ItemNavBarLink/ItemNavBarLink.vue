<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        label: String,
        href: String,
        icon: Object, 
    })

    const isActive = ref(false)

    const setActive = () => {
        isActive.value = true
    }
</script>

<template>
    <li class="nav-item" :class="{ active: isActive }">
        <a class="nav-link" :href="href" @click="setActive">
            <component :is="icon" />{{ label }}
        </a>
    </li>
</template>
