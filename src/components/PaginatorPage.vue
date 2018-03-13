<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item" v-for="page in total">
                    <a class="page-link" href="#" v-on:click="selectHandler( page )">{{ page }}</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
        <div>total{{ total }}</div>
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
            selectHandler: function (page) {
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