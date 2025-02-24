<template>
    <div class="tool-item">
        <component v-if="tool.component" :is="tool.component" />
        <img v-else :src="tool.src" alt="" />
        <p>{{ tool.name }}</p>
    </div>
</template>

<script setup>
    defineProps({
        tool: {
            type: Object,
            required: true
        }
    });
</script>