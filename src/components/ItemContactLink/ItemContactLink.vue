<script setup lang="ts">

    const props = defineProps({
        title: String,
    })
</script>

<template>
    <li class="contact-link">
        <a v-bind="$attrs"
           class="contact-link">
            <p class="link-icon">
                <slot />
            </p>

        </a>
    </li>
</template>
