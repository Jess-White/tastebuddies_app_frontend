<template>
  <swipe-list
    ref="list"
    class="card"
    :disabled="!enabled"
    :items="filteredMenuItems"
    item-key="id"
    @swipeout:click="itemClick"
  >
    <template v-slot="{ item, index, revealLeft, revealRight, close }">
      <!-- item is the corresponding object from the array -->
      <!-- index is clearly the index -->
      <!-- revealLeft is method which toggles the left side -->
      <!-- revealRight is method which toggles the right side -->
      <!-- close is method which closes an opened side -->
      <div class="card-content">
        <!-- style content how ever you like -->
        <img :src="item.image_url" />
      </div>
    </template>
    <!-- left swipe side template and v-slot:left="{ item }" is the item clearly -->
    <!-- remove if you dont wanna have left swipe side  -->
    <template v-slot:left="{ item, close }">
      <div class="swipeout-action red" title="remove" @click="remove(item)">
        <!-- place icon here or what ever you want -->
        <i class="fa fa-trash"></i>
      </div>
      <div class="swipeout-action purple" @click="close">
        <!-- place icon here or what ever you want -->
        <i class="fa fa-close"></i>
      </div>
    </template>
    <!-- right swipe side template and v-slot:right"{ item }" is the item clearly -->
    <!-- remove if you dont wanna have right swipe side  -->
    <template v-slot:right="{ item }">
      <div class="swipeout-action blue">
        <!-- place icon here or what ever you want -->
        <i class="fa fa-heart"></i>
      </div>
      <div class="swipeout-action green">
        <!-- place icon here or what ever you want -->
        <i class="fa fa-heart"></i>
      </div>
    </template>
    <template v-slot:empty>
      <div>
        <!-- change mockSwipeList to an empty array to see this slot in action  -->
        list is empty ( filtered or just empty )
      </div>
    </template>
</swipe-list>


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
        randomMenuItem: {},
        filteredMenuItems: [],
        errors: [],
        enabled: true,
      };
    },
    created: function() {
      const filteredCuisines = this.filteredCuisines
      const filteredRestaurants = []
      const filteredMenuItems = []

      filteredCuisines.forEach(cuisine => {
        cuisine.restaurants.forEach(restaurant => {
          filteredRestaurants.push(restaurant)
        })
      })
      filteredRestaurants.forEach(restaurant => {
        restaurant.menu_items.forEach(menu_item => {
          filteredMenuItems.push(menu_item)
        })
      })
      this.filteredMenuItems = filteredMenuItems
      this.randomMenuItem = filteredMenuItems[Math.floor(Math.random() * filteredMenuItems.length)]
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
        this.filteredMenuItems = this.filteredMenuItems.filter(i => i !== item);
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