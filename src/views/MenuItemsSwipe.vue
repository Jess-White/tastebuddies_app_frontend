<template>
  <div class="menu_items-show">

     <div class="row">
       <div class="col">
        <img :src="menu_item.image_url">
       </div>
       <div>
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
        menu_item: {
          id: "",
          image_url: ""
        },
        errors: [],
      };
    },
    created: function() {
      axios 
        .get("/menu_items/" + this.$route.params.id)
        .then(response => {
          console.log(response.data[0])
          this.menu_item = response.data[0]
        });
    }
};
</script>