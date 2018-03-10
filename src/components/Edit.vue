<template>
    <form>
        <div class="form-group">
            <label for="firstName">Name</label>
            <input type="text" class="form-control" id="firstName" v-model="user.firstName">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="user.lastName">
        </div>
        <div class="form-check">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="user.isActive">
                is active
            </label>
        </div>
        <div class="form-group">
            <label for="company">Company</label>
            <input type="text" class="form-control" id="company" v-model="user.company">
        </div>
        <button type="button" class="btn btn-primary" v-on:click="saveRequest">Save</button>
    </form>
</template>

<script>
    export default {
        name: "edit",
        props: {
            // user form
            user: {
                type: Object,
                required: true
            }
        },
        methods: {
            saveRequest: function () {
                this.$emit('save', this.user);
            }
        }
    }
</script>

<style scoped>

</style>