<template>
  <div class="container">
    <div class="go-back ">
      <button  class="animation" @click="goBack">Go Back!</button>
    </div>
    <div >
      <GameCardsStack
          :cards="filteredImages"
          @cardAccepted="handleCardAccepted"
          @cardRejected="handleCardRejected"
          @cardSkipped="handleCardSkipped"
          @hideCard="removeCardFromDeck"
        />
    </div>
  
        <!-- get the image_url as an event when cardAccepted -->
  </div>
</template>

<style>
.go-back {
  margin: auto;
  padding: 40px;
}
.animation {
  background-color: #f4511e;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 15px;
}
.animation:hover {
  opacity: 1;
}
</style>

<script>
import GameCardsStack from "./GameCardsStack";
import axios from "axios";

export default {
  components: {
    GameCardsStack,
  },
  props: ["filteredCuisines"],
  data: function () {
    return {
      filteredMenuItems: [],
      filteredImages: [],
      errors: [],
      enabled: true,
      rejectedImages: [],
    };
  },
  created: function () {
    const filteredCuisines = this.filteredCuisines;
    const filteredRestaurants = [];
    const filteredMenuItems = [];
    const filteredImages = [];

    filteredCuisines.forEach((cuisine) => {
      cuisine.restaurants.forEach((restaurant) => {
        filteredRestaurants.push(restaurant);
      });
    });
    filteredRestaurants.forEach((restaurant) => {
      restaurant.menu_items.forEach((menu_item) => {
        filteredMenuItems.push(menu_item);
      });
    });
    this.filteredMenuItems = filteredMenuItems;

    this.filteredImages = filteredImages;

    filteredMenuItems.forEach((menu_item) => {
      filteredImages.push(menu_item.image_url);
    });
    console.log(filteredImages);
  },
  methods: {
    handleCardAccepted(card) {
      const menu_item = this.filteredMenuItems.find((menu_item) => {
        return menu_item.image_url === card;
      });
      this.$router.push({
        path: `restaurants/${menu_item.restaurant_id} `,
      });

      // axios.get("'/restaurants/' + restaurant.id").then((response) => {
      // this.restaurants = response.data;

      // window.location.href = "."
    },
    handleCardRejected(card) {
      console.log("handleCardRejected");
      this.filteredImages = this.filteredImages.filter(
        (image) => card !== image
      );
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
    },
  },
};
</script>

 