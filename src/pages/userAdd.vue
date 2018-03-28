<template>
    <div>
        <h3>Add user</h3>
        <div class="row">
            <user-form v-model="user"></user-form>
        </div>
        <button type="button" class="btn btn-danger" v-on:click="add">Add</button>
        <p class="alert-success" v-if="done">Saved</p>
    </div>
</template>

<script>
    import Axios from '@/infrastructure/axiosConfig';
    export default {
        name: 'user-add',
        components: {
            'user-form': () => import('@/components/UserForm')
        },
        data: function () {
            return {
                user: {
                    "isActive": false,
                    "balance": "$0.00",
                    "picture": "",
                    "age": 0,
                    "accessLevel": "",
                    "firstName": "",
                    "lastName": "",
                    "company": "",
                    "email": "",
                    "phone": "",
                    "address": "",
                    "about": "about",
                    "registered": ""
                },
                done: false
            };
        },
        methods: {
            add: function () {
                Axios.post('/users', this.user)
                    .then(() => this.done = true)
                    .then(() => this.$router.replace({ path: `/users`}));
            }
        }
    }
</script>
