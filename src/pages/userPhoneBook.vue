<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <h4>Phone book (users {{ totalUsersCount }})</h4>
                </div>
                <div class="col-9">
                    <list-controls v-bind:rows="totalUsersCount" v-model="paginator"></list-controls>
                </div>
            </div>
        </div>
        <div v-if="!userList">
            <p class="alert-info">Loading...</p>
        </div>
        <div v-else>
            <user-list v-bind:users="userList" v-on:edit="editRequestHandler">
                <template slot="tableheader">
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </template>
                <template slot="tablerowbody" slot-scope="props">
                    <td scope="row">{{ props.id }}</td>
                    <td>{{ props.firstName }}</td>
                    <td>{{ props.lastName }}</td>
                    <td>{{ props.phone }}</td>
                </template>
            </user-list>
        </div>
    </div>
</template>

<script>
    import listPage from '@/pages/userList';
    export default {
        extends: listPage
    };
</script>