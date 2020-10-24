<template>
  <div class="container">
    <div class="go-back">
      <button  class="animation" @click="goBack">Go Back!</button>
    </div>
    <div>
      <GameCardsStack
          :cards="filteredImages"
          @cardAccepted="handleCardAccepted"
          @cardRejected="handleCardRejected"
          @cardSkipped="handleCardSkipped"
          @hideCard="removeCardFromDeck"
        />
    </div>
  </div>
</template>

<style>
.go-back {
  margin: auto;
  padding-bottom: 10px;
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
@media only screen and (max-width: 760px) {
  .animation{
    padding: 8px 16px;
  }
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
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    shuffle(this.filteredMenuItems);

    this.filteredImages = filteredImages;

    filteredMenuItems.forEach((menu_item) => {
      filteredImages.push(menu_item.image_url);
    });
  },
  methods: {
    handleCardAccepted(card) {
      const menu_item = this.filteredMenuItems.find((menu_item) => {
        return menu_item.image_url === card;
      });
      this.$router.push({
        path: `restaurants/${menu_item.restaurant_id} `,
      });
    },
    handleCardRejected(card) {
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

 