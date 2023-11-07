<script setup>
const props = defineProps({ name: String });
</script>

<template>
    <p class="text-danger">{{ name }}</p>
</template>