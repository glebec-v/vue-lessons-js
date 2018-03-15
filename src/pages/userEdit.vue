<template>
    <div class="container">
        <h3>User Edit Form</h3>
        <div>
            <user-form v-bind:user="user" v-model="user"></user-form>
            <button type="button" class="btn btn-primary" v-on:click="updateUser">Save</button>
        </div>
    </div>
</template>

<script>
    import Axios from '@/infrastructure/axiosConfig';
    export default {
        name: 'user-edit',
        components: {
            'user-form': () => import('@/components/UserForm')
        },
        data: function () {
            return {
                user: {}
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
                        this.user = response.data;
                    });
            },
            updateUser: function () {
                Axios.patch(`/users/${this.user.id}`, this.user)
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
