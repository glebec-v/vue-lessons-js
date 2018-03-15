<template>
    <div>
        <h3>Add user</h3>
        <button type="button" class="btn btn-danger" v-on:click="add">Add</button>
        <p class="alert-success" v-if="done">Saved</p>
    </div>
</template>

<script>
    // todo ADD user-form to <template>
    // TODO NOT COMPLETED!!!!
    import Axios from '@/infrastructure/axiosConfig';
    export default {
        name: 'user-add',
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
                    "about": "",
                    "registered": ""
                },
                done: false
            };
        },
        methods: {
            add: function () {
                Axios.post('/users', self.user)
                    .then(() => this.done = true);
            }
        }
    }
</script>
