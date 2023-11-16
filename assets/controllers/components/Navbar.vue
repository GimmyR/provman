<script setup>
import AddProvisionModal from './AddProvisionModal.vue';

defineProps({ username: String, states: Object });
</script>

<template>
    <nav class="navbar navbar-expand navbar-dark bg-purple navbar-custom">
        <div class="container-fluid">
            <a href="/" class="navbar-brand fw-bold">ProvMan</a>
            <div class="collapse navbar-collapse d-flex flex-row justify-content-between">
                <form class="d-flex mx-auto" role="search">
                    <div class="input-group">
                        <select class="form-select navbar-select" aria-label="Default select">
                            <option v-for="state in states" v-bind:value="state.id">{{ state.name }}</option>
                        </select>
                        <input type="search" class="form-control" placeholder="Search provision" aria-label="Search"/>
                        <button type="button" class="btn btn-light">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </form>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add-provision-modal" class="nav-link bi bi-plus-circle fs-4"></a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <a href="#" class="nav-link bi bi-person-circle fs-4" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><h6 class="dropdown-header">{{ username }}</h6></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a href="#" class="dropdown-item">Settings</a></li>
                                <li><a href="/logout" class="dropdown-item">Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
    .navbar-custom {
        height: 54px;
        flex-direction: row;
        align-items: center;
    }

    .navbar-select {
        max-width: 30%;
    }
</style>