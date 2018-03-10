<template>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Active</th>
            <th>Balance</th>
            <th>Age</th>
            <th>Access-level</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Registered</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td><span v-bind:class="activeClass(index)">{{ activeText(index) }}</span></td>
            <td>{{ user.balance }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.accessLevel }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.company }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.registered }}</td>
            <td><button type="button" class="btn btn-info" v-on:click="editRequest( user.id )">Edit</button></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "list",
        props: {
            // array of users
            users: {
                type: Array,
                required: true
            }
        },
        methods: {
            activeClass: function (index) {
                return {
                    'badge':         true,
                    'badge-success': this.users[index].isActive,
                    'badge-warning': !this.users[index].isActive
                };
            },
            activeText: function (index) {
                return this.users[index].isActive ? 'Active' : 'Inactive'
            },
            editRequest: function (id) {
                this.$emit('edit', {userId: id});
            }
        }
    };
</script>

<style scoped>

</style>