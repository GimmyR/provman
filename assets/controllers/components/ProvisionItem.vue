<script setup>
import { reactive } from 'vue';

defineProps({ provision: Object, edit: Object });

const classes = reactive({ display: "d-none" });
</script>

<template>
    <div class="col-12 shadow mb-4 pb-3 d-flex flex-column" @mouseenter="() => classes.display = 'd-inline'" @mouseleave="() => classes.display = 'd-none'">
        <div class="d-flex flex-row justify-content-end close-button-div">
            <button type="button" @click="() => edit(provision)" class="btn btn-danger rounded-0" v-bind:class="classes.display" data-bs-toggle="modal" data-bs-target="#edit-provision-modal">
                <i class="bi bi-pencil-fill"></i>
            </button>
        </div>
        <div>
            <h2 class="fs-5 text-center">{{ provision.name }}</h2>
        </div>
        <div class="d-flex flex-row justify-content-center">
            <p>{{ provision.image }}</p>
        </div>
    </div>
</template>

<style>
    .close-button-div {
        height: 40px;
    }
</style>