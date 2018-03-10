<template>
    <div>
        <h3>User Edit Form</h3>
        <div>
            <user-edit-form v-bind:user="userFields" v-on:save="updateUser"></user-edit-form>
        </div>
    </div>
</template>

<script>
    import userForm from '@/components/Edit';
    import Axios from '@/infrastructure/axiosConfig';
    export default {
        name: 'user-edit',
        components: {
            'user-edit-form': userForm
        },
        data: function () {
            return {
                userFields: {}
            }
        },
        methods: {
            loadUser: function (id) {
                const self = this;
                Axios.get(`/users/${id}`)
                    .then(response => {
                        self.userFields = response.data;
                    });
            },
            updateUser: function (user) {
                const self = this;
                Axios.patch(`/users/${user.id}`, user)
                    .then(() => self.$router.replace({ path: `/users`}));
            }
        },
        mounted: function () {
            if (this.$router.currentRoute.params.hasOwnProperty('userId')) {
                this.loadUser(this.$router.currentRoute.params.userId);
            }

        }
    }
</script>

<style scoped>

</style>
