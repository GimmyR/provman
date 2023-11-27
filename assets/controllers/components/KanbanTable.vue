<script setup>
import draggable from 'vuedraggable';
import ProvisionItem from './ProvisionItem.vue';
import { reactive, ref } from 'vue';
import AddProvisionModal from './AddProvisionModal.vue';
import EditProvisionModal from './EditProvisionModal.vue';

const props = defineProps({ columns: Array, provisions: Array, pushProvisionAt: Object, getProvisions: Object, setProvisions: Object, setProvisionAt: Object, remove: Object });

const provs = ref(props.getProvisions());

const toModify = reactive({
    id: null,
    name: "",
    image: null
});

const modify = function(edit) {
    toModify.id = edit.id;
    toModify.name = edit.name;
    toModify.image = edit.image;
};

const setProvs = function() {
    for(var i = 0; i < props.provisions.length; i++) {
        for(var j = 0; j < props.provisions[i].length; j++) {
            if(props.provisions[i][j].id == toModify.id) {
                props.setProvisionAt(i, j, toModify);
                editProvisions();
                break;
            }
        }
    }
};

const postProvisions = async function() {
    const response = await fetch("/api/edit-provisions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(props.getProvisions())
    }); return response.json();
};

const editProvisions = function() {
    postProvisions().then(response => {
        props.setProvisions(response.provisions);
    }).catch(error => console.log("ERROR: ", error));
};
</script>

<template>
    <div class="container-fluid py-3 my-container">
        <div class="row h-100 gx-3">
            <div v-for="(column, index) in columns" class="col-4 h-100">
                <div class="bg-light d-flex flex-column align-items-center px-5 pb-5 mh-100 overflow-auto">
                    <h1 class="py-4 fs-2">{{ column.name }}</h1>
                    <draggable v-model="provisions[index]" tag="div" group="provisions" class="col-12" @end="editProvisions">
                        <template #item="{ element: provision }">
                            <ProvisionItem v-bind:provision="provision" v-bind:edit="modify"/>
                        </template>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
    <AddProvisionModal v-bind:provisions="provisions" v-bind:save="editProvisions" v-bind:push-provision-at="pushProvisionAt"/>
    <EditProvisionModal v-bind:provision="toModify" v-bind:save="setProvs" v-bind:remove="remove"/>
</template>

<style>
    .my-container {
        height: 94vh;
    }

    .column {
        overflow-y: auto;
    }
</style>