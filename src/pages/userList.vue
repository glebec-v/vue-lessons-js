<template>
    <div>
        <h4 class="align-content-start">User list</h4>
        <div v-if="!userList">
            <p class="alert-info">Loading...</p>
        </div>
        <div v-else>
            <list-controls class="align-middle"></list-controls>
            <user-list v-bind:users="userList" v-on:edit="editRequestHandler"></user-list>
        </div>
    </div>
</template>

<script>
    import userList from '@/components/List';
    import Axios from '@/infrastructure/axiosConfig';
    import ListControls from "@/components/ListControls";
    export default {
        name: 'UsersPage',
        components: {
            'user-list': userList,
            'list-controls': ListControls,
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