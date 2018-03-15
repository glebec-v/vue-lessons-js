<template>
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-3">
                <paginator-lines v-model.number="linesPerPage"></paginator-lines>
            </div>
            <div class="col-3">
                <paginator-page v-bind:total="pagesTotal" v-model="pageNumber"></paginator-page>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list-controls",
        components: {
            'paginator-page': () => import('@/components/PaginatorPage'),
            'paginator-lines': () => import('@/components/PaginatorLinesOnPage')
        },
        props: {
            rows: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                linesPerPage: 0,
                pageNumber: 0
            }
        },
        computed: {
            pagesTotal: function () {
                return this.linesPerPage === 0 ? 1 : Math.ceil(this.rows/this.linesPerPage);
            }
        },
        methods: {
            emitPaginationEvent: function () {
                this.$emit('pagination', {
                    linesPerPage: this.linesPerPage,
                    // reset pageNumber if linesPerPage's change push selected pageNumber out of bounds
                    pageNumber: this.pageNumber > this.pagesTotal ? 1 : this.pageNumber
                });
            }
        },
        watch: {
            linesPerPage: function () {
                this.emitPaginationEvent();
            },
            pageNumber: function () {
                this.emitPaginationEvent();
            }
        }
    }
</script>

<style scoped>

</style>