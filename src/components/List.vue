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
        <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td><span v-bind:class="activeClass(user.isActive)">{{ activeText(user.isActive) }}</span></td>
            <td>{{ user.balance }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.accessLevel }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.company }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.registered }}</td>
            <td><button type="button" class="btn btn-info" v-on:click="$emit('edit', user.id)">Edit</button></td>
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
            activeClass: function (active) {
                return {
                    'badge':         true,
                    'badge-success': active,
                    'badge-warning': !active
                };
            },
            activeText: function (active) {
                return active ? 'Active' : 'Inactive';
            }
        }
    };
</script>
