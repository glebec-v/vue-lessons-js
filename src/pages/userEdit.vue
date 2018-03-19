<template>
    <div class="container">
        <h3>User Edit Form</h3>
        <div class="row">
            <user-form v-bind:user="user" v-model="user"></user-form>
        </div>
        <div class="row">
            <div class="col-3">
                <button type="button" class="btn btn-lg btn-success" v-on:click="updateUser">Save</button>
            </div>
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
        computed: {
            userId: function () {
                return this.$route.params.userId || '';
            }
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
        }
    }
</script>
