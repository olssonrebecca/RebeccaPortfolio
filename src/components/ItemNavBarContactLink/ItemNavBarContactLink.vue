<script setup lang="ts">
    import { NavigationMenuLink } from 'radix-vue'

    const props = defineProps({
        title: String,
    })
</script>

<template>
    <li>
        <NavigationMenuLink as-child>
            <a v-bind="$attrs"
               class="ListItemLink">
                <h2 class="ListItemHeading">
                    {{ props.title }}
                </h2>
                <p class="ListItemText">
                    <slot />
                </p>
            </a>
        </NavigationMenuLink>
    </li>
</template>
