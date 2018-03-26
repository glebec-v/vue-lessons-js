<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label for="firstName">Name</label>
                    <input type="text" class="form-control" id="firstName" v-model="user.firstName">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" v-model="user.lastName">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age" v-model="user.age">
                    <label for="access">Access level</label>
                    <input type="text" class="form-control" id="access" v-model="user.accessLevel">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" v-model="user.email">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="user.phone">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" v-model="user.address">
                    <label for="company">Company</label>
                    <input type="text" class="form-control" id="company" v-model="user.company">
                </div>
                <div class="row">
                    <div class="col-3">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" v-model="user.isActive">
                                is active
                            </label>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="form-group">
                            <label for="balance">Balance</label>
                            <input type="text" class="form-control" id="balance" v-model="user.balance">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label for="picture">Picture</label>
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" v-bind:src="user.picture" v-bind:alt="user.firstName">
                        <div class="card-body">
                            <h5 class="card-title">User picture</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Upload</a>
                            <input type="text" class="form-control" id="picture" v-model="user.picture">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="registered">Registered</label>
                    <date-picker id="registered" v-model="user.registered"></date-picker>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="form-group">
                    <label for="about">About</label>
                    <quill-editor id="about" v-bind:rows="15" v-model="user.about"></quill-editor>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-user",
        components: {
            'date-picker': () => import('@/components/DatePicker'),
            'quill-editor': () => import('@/components/QuillEditor')
        },
        props: {
            // user form
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>