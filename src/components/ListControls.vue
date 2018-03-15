<template>
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-3">
                <paginator-lines v-bind:lineOptions="choices" v-model.number="linesPerPage"></paginator-lines>
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
            // total users count
            rows: {
                type: Number,
                required: true
            },
            choices: {
                type: Array
            }
        },
        data() {
            return {
                linesPerPage: 100,
                pageNumber: 1
            }
        },
        computed: {
            pagesTotal: function () {
                return Math.ceil(this.rows/this.linesPerPage);
            },
            // reset pageNumber if linesPerPage's change push selected pageNumber out of bounds
            selectedPageNumber: function () {
                return this.pageNumber > this.pagesTotal ? 1 : this.pageNumber;
            }
        },
        watch: {
            linesPerPage: 'emitPaginationEvent',
            pageNumber: 'emitPaginationEvent'
        },
        methods: {
            emitPaginationEvent: function () {
                this.$emit('pagination', {
                    linesPerPage: this.linesPerPage,
                    pageNumber: this.selectedPageNumber
                });
            }
        }
    }
</script>
