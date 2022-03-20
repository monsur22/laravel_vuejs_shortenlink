<template>
<div class="container">
    <h1 class="d-flex justify-content-center">Create URL Shortener Laravel</h1>

    <div class="card">
        <div class="card-header">
        <form  @submit="formSubmit">
            <div class="input-group mb-3">
                <input type="text" name="link" class="form-control" placeholder="Enter URL" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="link">
                <div class="input-group-append">
                <button class="btn btn-success" type="submit">Generate Shorten Link</button>
                </div>
            </div>
        </form>
        </div>
        <!-- <Table /> -->
                 <div class="card-body">

            <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Short Link</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" v-bind:key="post.id" >
                            <td>{{post.id}}</td>
                            <td><a v-bind:href="post.link" target="_blank">{{post.code}}</a></td>
                            <td>{{post.link}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</div>
</template>

<script>
export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
              link: '',
              posts: [],
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:8000/api/generate-shorten-link', {
                    link: this.link,
                    description: this.description
                })
                .then(response => {
                    this.link = '';
                    this.getData();

                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            },
            async getData() {
                try {
                    let response = await fetch("http://localhost:8000/api/generate-shorten-link");
                    this.posts = await response.json();
                } catch (error) {
                    console.log(error);
                }
                },
            onSuccess(response) {
                this.link = '';
            }
        },
        created() {
            this.getData();
    },
    }
</script>