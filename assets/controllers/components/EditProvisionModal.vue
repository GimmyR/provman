<script setup>
import { ref } from 'vue';

const props = defineProps({ provision: Object, save: Object });

const editImage = function(event) {

};

const handleRemove = function() {
    props.provision.remove = true;
    props.save();
};

const editProvisions = function() {
    props.save();
};
</script>

<template>
    <div id="edit-provision-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Provision</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <input type="text" class="form-control mb-3" v-model="provision.name" placeholder="Name"/>
                        <input type="file" class="form-control" @change="editImage"/>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" @click="handleRemove" data-bs-dismiss="modal">Remove</button>
                    <button type="button" class="btn btn-purple" @click="editProvisions" data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>