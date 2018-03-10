<template>
    <div>
        <h4>User list</h4>
        <div v-if="userList">
            <user-list-template v-bind:users="userList" v-on:edit="editRequestHandler"></user-list-template>
        </div>
        <div v-else>
            <p class="alert-info">Loading...</p>
        </div>
    </div>
</template>

<script>
    import userListTemplate from '@/components/List';
    import Axios from '@/infrastructure/axiosConfig';
    export default {
        name: 'UsersPage',
        components: {
            'user-list-template': userListTemplate
        },
        data: function () {
            return {
                userList: []
            };
        },
        methods: {
            loadUsers: function () {
                let self = this;
                Axios.get('/users')
                    .then(response => {
                        self.userList = response.data;
                    });
            },
            editRequestHandler: function (eventData) {
                this.$router.push({ path: `/users/${eventData.userId}`});
            }
        },
        mounted: function () {
            this.loadUsers();
        }
    };
</script>

<style scoped>

</style>