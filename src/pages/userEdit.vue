<template>
    <div>
        <h3>User Edit Form</h3>
        <div>
            <user-form v-bind:user="userFields"></user-form>
            <button type="button" class="btn btn-primary" v-on:click="updateUser">Save</button>
        </div>
    </div>
</template>

<script>
    import userForm from '@/components/UserForm';
    import Axios from '@/infrastructure/axiosConfig';
    export default {
        name: 'user-edit',
        components: {
            'user-form': userForm
        },
        data: function () {
            return {
                userFields: {}
            }
        },
        mounted: function () {
            this.loadUser();
        },
        methods: {
            loadUser: function () {
                if (! this.userId) {
                    return;
                }
                Axios.get(`/users/${this.userId}`)
                    .then(response => {
                        this.userFields = response.data;
                    });
            },
            updateUser: function () {
                Axios.patch(`/users/${this.userFields.id}`, this.userFields)
                    .then(() => this.$router.replace({ path: `/users`}));
            }
        },
        computed: {
            userId: function () {
                return this.$route.params.userId || '';
            }
        }
    }
</script>
