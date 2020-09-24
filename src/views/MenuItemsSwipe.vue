<template>
  <div class="menu_items_show">

     <div class="row">
       <div class="col">
        <img :src="randomMenuItem.image_url">
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
        randomMenuItem: {
          id: "",
          image_url: ""
        },
        errors: [],
      };
    },
    created: function() {
      axios 
        .get("/menu_items/")
        .then(response => {

          this.randomMenuItem = response.data[Math.floor(Math.random() * response.data.length)]
          console.log(this.randomMenuItem)
        });
    }
};
</script>