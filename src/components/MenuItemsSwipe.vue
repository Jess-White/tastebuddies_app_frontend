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
  import { SwipeList, SwipeOut } from 'vue-swipe-actions';


  export default {
    components: {
      SwipeOut,
      SwipeList
    },
    props: ["filteredCuisines"],
    data: function() {
      return {
        randomMenuItem: {
          id: "",
          image_url: ""
        },
        menuItems: [],
        id: "",
        image_url: "",
        errors: [],
        enabled: true,
      };
    },
    created: function() {

      const menuItems = this.filteredCuisines
      // loop through each cuisine object and create new array of restaurant objects, then do the same within those restaurants for menu_items
      console.log(menuItems)
    },
    methods: {
      revealFirstRight() {
        this.$refs.list.revealRight(0);
      },
      revealFirstLeft() {
        this.$refs.list.revealLeft(0);
      },
      closeFirst() {
        this.$refs.list.closeActions(0);
      },
      closeAll() {
        this.$refs.list.closeActions();
      },
      remove(item) {
        this.mockSwipeList = this.mockSwipeList.filter(i => i !== item);
        // console.log(e, 'remove');
      },
      itemClick(e) {
        console.log(e, "item click");
      },
      fbClick(e) {
        console.log(e, "First Button Click");
      },
      sbClick(e) {
        console.log(e, "Second Button Click");
    },
  }
};
</script>

 