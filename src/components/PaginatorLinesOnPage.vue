<template>
    <div class="form-group">
        <select class="form-control" v-on:input="inputHandler($event.target.value)">
            <option v-for="option in options" :key="option.value" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'paginator-settings',
        props: {
            lineOptions: {
                type: Array
            }
        },
        data() {
            return {
                defaultOptions: [
                    { text: 'Select rows per page', value: '' },
                    { text: '3 lines on page', value: '3' },
                    { text: '5 lines on page', value: '5' },
                    { text: '15 lines on page', value: '15' },
                    { text: '25 lines on page', value: '25' },
                    { text: '50 lines on page', value: '50' },
                ]
            }
        },
        computed: {
            options: function () {
                if (undefined === this.lineOptions) {
                    return this.defaultOptions;
                }
                return this.lineOptions;
            }
        },
        methods: {
            inputHandler: function (value) {
                if (value.length) {
                    this.$emit('input', value);
                }
            }
        }
    }
</script>
