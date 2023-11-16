<script setup>
import KanbanTable from './components/KanbanTable.vue';
import Navbar from './components/Navbar.vue';

defineProps({ username: String, states: Array, provisions: Array });
</script>

<template>
    <Navbar v-bind:username="username" v-bind:states="states"/>
    <KanbanTable v-bind:columns="states" v-bind:provisions="provisions"/>
</template>