<template>
    <div class="component-datepicker">
        <input type="text" ref="datepicker" class="form-control" v-bind:value="value">
    </div>
</template>

<script>
    import flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.css';
    export default {
        name: "date-picker",
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                flatpickr: null
            }
        },
        mounted: function () {
            this.initDatePicker();
        },
        beforeDestroy: function () {
            this.flatpickr.destroy();
        },
        watch: {
            value: 'setDatePicker'
        },
        methods: {
            initDatePicker: function () {
                this.flatpickr = flatpickr(this.$refs.datepicker, {
                    dateFormat: 'd.m.Y',
                    onChange: (selectedDates, dateStr) => this.$emit('input', dateStr)
                });
            },
            setDatePicker: function () {
                if (this.flatpickr) {
                    this.flatpickr.setDate(this.value, false, 'd.m.Y');
                }
            }
        }
    }
</script>

<style scoped>
    .component-datepicker .flatpickr-input {
        background-color: #c4ff35;
    }
</style>