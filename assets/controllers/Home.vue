<script setup>
import KanbanTable from './components/KanbanTable.vue';
import Navbar from './components/Navbar.vue';

const props = defineProps({ username: String, states: Array, provisions: Array });

const setProvisions = function(value) {
    props.provisions.splice(0, props.provisions.length);
    for(var i = 0; i < value.length; i++) {
        const table = [];
        for(var j = 0; j < value[i].length; j++) {
            table.push(value[i][j]);
        } props.provisions.push(table);
    }
};

const getProvisions = function() {
    return props.provisions;
};

const pushProvisionAt = function(i, value) {
    props.provisions[i].push(value);
};

const setProvisionAt = function(i, j, value) {
    props.provisions[i][j].name = value.name;
    props.provisions[i][j].image = value.image;
};

const getProvisionsAt = function(i) {
    return props.provisions[i];
};

const remove = function(id) {
    for(var i = 0; i < props.provisions.length; i++) {
        for(var j = 0; j < props.provisions[i].length; j++) {
            if(props.provisions[i][j].id == id) {
                props.provisions[i][j].remove = true;
                break;
            }
        }
    }
};
</script>

<template>
    <Navbar v-bind:username="username" v-bind:states="states" v-bind:provisions="provisions" v-bind:get-provisions-at="getProvisionsAt"/>
    <KanbanTable v-bind:columns="states" v-bind:push-provision-at="pushProvisionAt" v-bind:get-provisions="getProvisions" v-bind:set-provisions="setProvisions" v-bind:set-provision-at="setProvisionAt" v-bind:remove="remove"/>
</template>