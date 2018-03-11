<template>
    <div>
        <paginator-settings v-on:usersonpage="settingsHandler"></paginator-settings>
        <span class="alert-info">{{ paginator.lines }}</span>
    </div>
</template>

<script>
    const paginator = {}; // todo import
    import paginatorSettings from '@/components/PaginatorSettings'
    export default {
        name: "list-controls",
        components: {
            'paginator-controls': paginator,
            'paginator-settings': paginatorSettings
        },
        data() {
            return {
                paginator: {
                    lines: 0,
                    page: 0
                }
            }
        },
        methods: {
            settingsHandler: function (eventData) {
                this.paginator.lines = eventData.lines;
            }
        }
    }
</script>

<style scoped>

</style>