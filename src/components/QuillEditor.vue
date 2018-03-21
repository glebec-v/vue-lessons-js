<template>
    <div>
        <textarea
                ref="quill"
                class="form-control"
                v-bind:rows="editorRows"
                v-bind:value="textContent"
                v-on:change="textChanged($event.target.value)"
        >
        </textarea>
    </div>
</template>

<script>
    import Quill from 'quill';
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';

    export default {
        name: "quill-editor",
        props: {
            textContent: {
                type: String,
                default: ''
            },
            editorRows: {
                type: Number,
                default: 15
            }
        },
        data() {
            return {
                quill: null
            }
        },
        mounted() {
            this.editorInit();
        },
        methods: {
            editorInit: function () {
                const toolbarOptions = [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],

                    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],                         // text direction

                    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],

                    ['clean']                                         // remove formatting button
                ];

                this.quill  = new Quill(this.$refs.quill, {
                    modules: {
                        toolbar: toolbarOptions
                    },
                    placeholder: 'Put about info...',
                    readOnly: false,
                    theme: 'snow'
                });
            },
            textChanged(text) {
                this.$emit('input', text);
            },
        }
    }
</script>
