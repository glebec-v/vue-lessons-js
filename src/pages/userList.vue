<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <h4>User list (users {{ totalUsersCount }})</h4>
                </div>
                <div class="col-9">
                    <list-controls v-bind:rows="totalUsersCount" v-model="paginator"></list-controls>
                    <!-- or with array of choices-->
                    <!---list-controls v-bind:rows="totalUsersCount" v-bind:choices="viewArray" v-model="paginator"></list-controls--->
                </div>
            </div>
        </div>
        <div v-if="!userList">
            <p class="alert-info">Loading...</p>
        </div>
        <div v-else>
            <user-list v-bind:users="userList" v-on:edit="editRequestHandler">
                <div slot="tableheader"></div>
                <template slot="tablerowbody"></template>
            </user-list>
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
        data() {
            return {
                userList: [],
                url: '/users',
                totalUsersCount: 0,
                viewArray: [
                    {text: 'select', value: '' },
                    {text: '3', value: '3' },
                    {text: '4', value: '4' },
                    {text: '6', value: '6' },
                ],
                paginator: {}
            };
        },
        mounted: function () {
            // save total user count
            this.loadUsers().then(() => { this.totalUsersCount = this.userList.length; });
        },
        computed: {
            params: function () {
                return {
                    _page: this.paginator.pageNumber,
                    _limit: this.paginator.linesPerPage
                };
            }
        },
        watch: {
            paginator: 'loadUsers'
        },
        methods: {
            loadUsers: function () {
                return Axios.get(this.url, { params: this.params })
                    .then(response => { this.userList = response.data; });
                // todo error handling!
            },
            editRequestHandler: function (userId) {
                this.$router.push({ path: `${this.url}/${userId}`});
            }
        }
    };
</script>