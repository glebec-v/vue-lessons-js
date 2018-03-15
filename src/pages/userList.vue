<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <h4>User list (users {{ totalUsersCount }})</h4>
                </div>
                <div class="col-9">
                    <list-controls v-bind:rows="totalUsersCount" v-on:pagination="paginationHandler"></list-controls>
                </div>
            </div>
        </div>
        <div v-if="!userList">
            <p class="alert-info">Loading...</p>
        </div>
        <div v-else>
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
                userList: [],
                url: '/users',
                totalUsersCount: 0
            };
        },
        methods: {
            loadUsers: function () {
                return Axios.get(this.url)
                    .then(response => { this.userList = response.data; });
                // todo error handling!
            },
            editRequestHandler: function (editUser) {
                this.$router.push({ path: `/users/${editUser.userId}`});
            },
            paginationHandler: function (pagination) {
                // todo save pagination state somewhere after user editing or deleting to return to previous pagination settings
                if (0 === parseInt(pagination.linesPerPage)) {
                    // no pagination
                    this.url = '/users';
                    this.loadUsers();
                } else {
                    // pagination set
                    this.url = `/users?_page=${pagination.pageNumber}&_limit=${pagination.linesPerPage}`;
                    this.loadUsers();
                }
            }
        },
        mounted: function () {
            // save total user count
            this.loadUsers().then(() => { this.totalUsersCount = this.userList.length; });
        }
    };
</script>