<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <h4>User list (users {{ userList.length }})</h4>
                </div>
                <div class="col-9" v-if="!userList">
                    <p class="alert-info">Loading...</p>
                </div>
                <div class="col-9" v-else>
                    <list-controls v-bind:rows="userList.length"></list-controls>
                </div>
            </div>
        </div>
        <div>
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