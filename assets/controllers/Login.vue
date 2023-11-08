<script setup>
import { reactive } from 'vue';


const form = reactive({
    username: "",
    password: ""
});

const postLogin = async function() {
    console.log(form);
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    }); return response.json();
};

const handleSubmit = function() {
    postLogin().then(response => {
        if(response.user != null) {
            window.location.href = "/";
        }
    }).catch(error => console.log("ERROR: ", error));
};

</script>

<template>
    <div class="container">
        <div class="row d-flex flex-row justify-content-center">
            <div class="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6 mt-3">
                <div class="card pb-3">
                    <div class="card-body d-flex flex-column align-items-center">
                        <div class="my-3">
                            <h1 class="text-purple fs-1">Login</h1>
                        </div>
                        <form @submit.prevent="handleSubmit" class="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Email Address</label>
                                <input type="email" class="form-control" placeholder="you@example.com" v-model="form.username"/>
                            </div>
                            <div class="mb-4">
                                <div class="d-flex flex-row justify-content-between">
                                    <label for="password" class="form-label fw-bold">Password</label>
                                    <a href="#" class="text-decoration-none text-purple">Forgotten ?</a>
                                </div>
                                <input type="password" name="password" class="form-control" placeholder="Enter 8 characters or more" v-model="form.password"/>
                            </div>
                            <div class="mb-3 d-grid">
                                <button type="submit" class="btn btn-purple text-uppercase fw-bold">Sign In</button>
                                <a href="#" class="text-center text-decoration-none mt-4 text-purple">Create Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>