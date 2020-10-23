<template>
  <div class="cuisines-show">

     <div class="row">
       <div>
        <h4 class="text-center">Cuisine: {{cuisine.name}}</h4>
      </div> 
    </div>

</div>
</template>

<script>
var axios = require("axios");

export default {
  data: function () {
    return {
      cuisine: {
        id: "",
        name: "",
        errors: [],
      },
    };
  },
  created: function () {
    axios.get("/cuisines/" + this.$route.params.id).then((response) => {
      this.cuisine = response.data[0];
      console.log(this.cuisine);
    });
  },
  watch: {
    $route: function () {
      axios.get("/cuisines/" + this.$route.params.id).then((response) => {
        this.cuisines = response.data;
      });
    },
  },
};
</script>