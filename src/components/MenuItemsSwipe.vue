<template>
  <div class="menu_items_show">
    <div class="row">
      <div class="col">
        <img :src="randomMenuItem.image_url">
      </div>
    </div>
  </div> 
</template>

<style></style>

<script>


  export default {
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
    }
  }
</script>

 