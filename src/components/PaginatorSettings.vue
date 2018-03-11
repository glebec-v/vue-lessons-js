<template>
    <div class="form-group">
        <label for="pageSettings">users on page</label>
        <select class="form-control" id="pageSettings" v-model="selected" v-on:input="onSelected($event.target.value)">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'paginator-settings',
        data() {
            return {
                selected: ''
            }
        },
        methods: {
            onSelected: function (value) {
                console.log(value);
                this.$emit('usersonpage', { lines: value });
            }
        }
    }
</script>

<style scoped>

</style>