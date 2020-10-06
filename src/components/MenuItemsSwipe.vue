<template>
  <div>
    <GameCardsStack
        :cards="filteredImages"
        @cardAccepted="handleCardAccepted"
        @cardRejected="handleCardRejected"
        @cardSkipped="handleCardSkipped"
        @hideCard="removeCardFromDeck"

      />
        <!-- get the image_url as an event when cardAccepted -->
    <button @click="goBack">Go Back!</button>
  </div>
</template>

<style></style>

<script>
import GameCardsStack from "./GameCardsStack";
import axios from 'axios';


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
        rejectedImages: [],

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
      handleCardAccepted(card) {

        const menu_item = this.filteredMenuItems.find(menu_item => {
          return menu_item.image_url === card;
        })
        this.$router.push({
          path: `restaurants/${menu_item.restaurant_id} `
        })

        // axios.get("'/restaurants/' + restaurant.id").then((response) => {
          // this.restaurants = response.data;

        // window.location.href = "."
      },
      handleCardRejected(card) {
        console.log("handleCardRejected");
        this.filteredImages = this.filteredImages.filter(image => card !== image)
        this.rejectedImages.push(card);
      },
      handleCardSkipped() {
        console.log("handleCardSkipped");
      },
      removeCardFromDeck() {
        this.filteredImages.shift();
      },
      goBack() {
        this.filteredImages.unshift(this.rejectedImages.pop());
      }
    }
  }
</script>

 