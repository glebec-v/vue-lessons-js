<template>
    <div>
        <nav>
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" v-on:click="previousHandler">Previous</a></li>
                <li class="page-item" v-for="page in total">
                    <a class="page-link" href="#" v-on:click="selectHandler( page )">{{ page }}</a>
                </li>
                <li class="page-item"><a class="page-link" href="#" v-on:click="nextHandler">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "paginator-page",
        props: {
            total: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                pageSelected: 1
            };
        },
        methods: {
            previousHandler: function () {
                let page = 0;
                if (1 === this.pageSelected) {
                    page = 1;
                } else {
                    page = this.pageSelected - 1;
                }
                this.selectHandler(page);
            },
            nextHandler: function () {
                let page = 0;
                if (this.total === this.pageSelected) {
                    page = this.total;
                } else {
                    page = this.pageSelected + 1;
                }
                this.selectHandler(page);
            },
            selectHandler: function (page) {
                this.pageSelected = parseInt(page);
                this.$emit('input', page);
            }
        },
        mounted: function () {
            this.selectHandler(this.pageSelected);
        }
    }
</script>

<style scoped>

</style>