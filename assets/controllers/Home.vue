<script setup>
import { ref } from 'vue';
import KanbanTable from './components/KanbanTable.vue';
import Navbar from './components/Navbar.vue';

const props = defineProps({ username: String, states: Array, provisions: Array });

const provs = ref(props.provisions);

const setProvisions = function(value) {
    provs.value.splice(0, provs.value.length);
    for(var i = 0; i < value.length; i++) {
        const table = [];
        for(var j = 0; j < value[i].length; j++) {
            table.push(value[i][j]);
        } provs.value.push(table);
    }
};

const getProvisions = function() {
    return provs.value;
};

const pushProvisionAt = function(i, value) {
    provs.value[i].push(value);
};

const setProvisionAt = function(i, j, value) {
    provs.value[i][j].name = value.name;
    provs.value[i][j].image = value.image;
};

const getProvisionsAt = function(i) {
    return props.provisionsprovs.value
}

const remove = function(id) {
    for(var i = 0; i < provs.value.length; i++) {
        for(var j = 0; j < provs.value[i].length; j++) {
            if(provs.value[i][j].id == id) {
                provs.value[i][j].remove = true;
                break;
            }
        }
    }
};
</script>

<template>
    <Navbar v-bind:username="username" v-bind:states="states" v-bind:get-provisions-at="getProvisionsAt"/>
    <KanbanTable v-bind:columns="states" v-bind:provisions="provs" v-bind:push-provision-at="pushProvisionAt" v-bind:get-provisions="getProvisions" v-bind:set-provisions="setProvisions" v-bind:set-provision-at="setProvisionAt" v-bind:remove="remove"/>
</template>