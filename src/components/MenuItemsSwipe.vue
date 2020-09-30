<template>
  <!-- <div class="menu_items_show">
    <div class="row">
      <div class="col">
        <img :src="randomMenuItem.image_url">
      </div>
    </div>
  </div>  -->
  <div>
    <GameCardsStack
        :cards="filteredImages"
        @cardAccepted="handleCardAccepted"
        @cardRejected="handleCardRejected"
        @cardSkipped="handleCardSkipped"
        @hideCard="removeCardFromDeck"

      />
  </div>


</template>

<style></style>

<script>
import GameCardsStack from "./GameCardsStack";


  export default {
    components: {
      GameCardsStack
    },
    props: ["filteredCuisines"],
    data: function() {
      return {
        filteredMenuItems: [],
        filteredImages: [],
        errors: [],
        enabled: true,
      };
    },
    created: function() {
      const filteredCuisines = this.filteredCuisines
      const filteredRestaurants = []
      const filteredMenuItems = []
      const filteredImages = []

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

      this.filteredImages = filteredImages

      filteredMenuItems.forEach(menu_item => {
        filteredImages.push(menu_item.image_url)
      })
      console.log(filteredImages)
    },
    methods: {
      handleCardAccepted() {
        console.log("handleCardAccepted");
      },
      handleCardRejected() {
        console.log("handleCardRejected");
        this.filteredImages.shift();
      },
      handleCardSkipped() {
        console.log("handleCardSkipped");
      },
      removeCardFromDeck() {
      }
    }
  }
</script>

 