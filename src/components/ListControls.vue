<template>
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-3">
                <paginator-lines v-model.number="linesPerPage"></paginator-lines>
                <span class="alert-info">Lines: {{ linesPerPage }}</span>
            </div>
            <div class="col-3">
                <paginator-page v-bind:total="pagesTotal" v-model="pageNumber"></paginator-page>
                <span class="alert-info">Page: {{ pageNumber }}</span>
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
                pageNumber: 0,
            }
        },
        computed: {
            pagesTotal: function () {
                return this.linesPerPage === 0 ? 1 : Math.ceil(this.rows/this.linesPerPage);
            }
        }
    }
</script>

<style scoped>

</style>