<script setup>
import draggable from 'vuedraggable';
import ProvisionItem from './ProvisionItem.vue';
import { reactive, ref } from 'vue';
import AddProvisionModal from './AddProvisionModal.vue';
import EditProvisionModal from './EditProvisionModal.vue';

const props = defineProps({ columns: Array, provisions: Array });

const provs = ref(props.provisions);

const toModify = reactive({
    id: null,
    name: "",
    image: null,
    remove: false
});

const modify = function(edit) {
    toModify.id = edit.id;
    toModify.name = edit.name;
    toModify.image = edit.image;
};

const setProvisions = function() {
    for(var i = 0; i < provs.value.length; i++) {
        for(var j = 0; j < provs.value[i].length; j++) {
            if(provs.value[i][j].id == toModify.id) {
                provs.value[i][j].name = toModify.name;
                provs.value[i][j].image = toModify.image;
                provs.value[i][j].remove = toModify.remove;
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
        body: JSON.stringify(provs.value)
    }); return response.json();
};

const editProvisions = function() {
    postProvisions().then(response => {
        provs.value = response.provisions;
    }).catch(error => console.log("ERROR: ", error));
};
</script>

<template>
    <div class="container-fluid py-3 my-container">
        <div class="row h-100 gx-3">
            <div v-for="(column, index) in columns" class="col-4 h-100">
                <div class="bg-light d-flex flex-column align-items-center px-5 pb-5 mh-100 overflow-auto">
                    <h1 class="py-4 fs-2">{{ column.name }}</h1>
                    <draggable v-model="provs[index]" tag="div" group="provisions" class="col-12" @end="editProvisions">
                        <template #item="{ element: provision }">
                            <ProvisionItem v-bind:provision="provision" v-bind:edit="modify"/>
                        </template>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
    <AddProvisionModal v-bind:provisions="provs" v-bind:save="editProvisions"/>
    <EditProvisionModal v-bind:provision="toModify" v-bind:save="setProvisions"/>
</template>

<style>
    .my-container {
        height: 94vh;
    }

    .column {
        overflow-y: auto;
    }
</style>