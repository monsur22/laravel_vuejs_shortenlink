<template>
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
</template>

<script>
    export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("http://localhost:8000/api/generate-shorten-link");
        this.posts = await response.json();
        // console.log(this.posts);
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>