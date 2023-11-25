<script setup>
import { reactive } from 'vue';

defineProps({ provision: Object, edit: Object });

const classes = reactive({ display: "d-none" });
</script>

<template>
    <div class="col-12 shadow-lg mb-4 d-flex flex-column" v-bind:id="'prov' + provision.id" @mouseenter="() => classes.display = 'd-inline'" @mouseleave="() => classes.display = 'd-none'">
        <div class="d-flex flex-row justify-content-end close-button-div">
            <button type="button" @click="() => edit(provision)" class="btn btn-danger rounded-0" v-bind:class="classes.display" data-bs-toggle="modal" data-bs-target="#edit-provision-modal">
                <i class="bi bi-pencil-fill"></i>
            </button>
        </div>
        <div class="pb-4">
            <h2 class="fs-5 text-center">{{ provision.name }}</h2>
        </div>
        <div class="d-flex flex-row justify-content-center">
            <img v-if="provision.image != null" v-bind:src="'/provisions/' + provision.image" class="img-fluid"/>
        </div>
    </div>
</template>

<style>
    .close-button-div {
        height: 40px;
    }
</style>