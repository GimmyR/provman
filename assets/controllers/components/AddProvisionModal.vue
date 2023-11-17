<script setup>
import { ref } from 'vue';
import { toBase64 } from '../../helpers';

const props = defineProps({ provisions: Object, save: Object });

const provision = ref({
    name: "",
    image: null,
    new: true
});

const editImage = function(event) {
    toBase64(event.target.files[0])
        .then(blob => provision.value.image = blob)
        .catch(error => console.log("ERROR: ", error));
};

const editProvisions = function() {
    props.provisions[0].push(provision.value);
    provision.value = {
        name: "",
        image: null,
        new: true
    }; props.save();
};
</script>

<template>
    <div id="add-provision-modal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Provision</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <input type="text" class="form-control mb-3" v-model="provision.name" placeholder="Name"/>
                        <input type="file" class="form-control" @change="editImage" accept="image/*"/>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-purple" @click="editProvisions" data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>