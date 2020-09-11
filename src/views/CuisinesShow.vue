<template>
  <div class="cuisines-show">

     <div class="row">
       <div>
        <h4 class="text-center">Cuisine: {{cuisine.type}}</h4>
      </div> 
    </div>

</div>
</template>

<style></style>

<script>
var axios = require('axios');

  export default {
    data: function() {
      return {
        cuisine: {
          cuisines: [],
          id: "",
          type: "",
          errors: [],
        },
      };
    },
    created: function() {
      axios 
        .get("/cuisines/" + this.$route.params.id)
        .then(response => {
          this.cuisine = response.data
        });
    },
    watch: {
      $route: function() {
        axios
        .get("/cuisines/" + this.$route.params.id)
        .then(response => {
          this.cuisines = response.data;
        });
      }  
    }
};
</script>