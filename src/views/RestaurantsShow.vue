<template>
  <div class="restaurants-show">
    <div class="row">
      <router-link v-bind:to="'/cuisines'" class="btn btn-success btn-lg" style="text-align: center; margin: 0 auto; width: 30%; color: black; font-size: 20px; font-weight: bold; letter-spacing: 2px; margin-bottom: 2%;">
        Start Over
      </router-link>
    </div>
    <div class="row">
      <div class="col">
        <h1> {{restaurant.name}}</h1>
        <h4> {{restaurant.address}}</h4>
        <h4>{{restaurant.phone_number}}</h4>
        <a :href="`${restaurant.website}`"><h4>Website</h4></a>
        <a :href="`${restaurant.website}`"><img class="img-restaurant" :src="restaurant.image_url"></a>
        <Carousel :menu_items="menu_items"/>
      </div>
     </div> 
</div>
</template>

<style>
body {
  background-image: url("/paper_2.png");
}
.img-restaurant {
  width: 450px;
  height: 450px;
  border: white 10px solid;
}
@media only screen and (max-width: 760px) {
  .img-restaurant {
    width: 400px;
  }
}
</style>

<script>
import Carousel from "@/components/Carousel.vue";
var axios = require("axios");

export default {
  components: {
    Carousel,
  },
  data: function () {
    return {
      restaurant: {
        id: "",
        name: "",
        address: "",
        phone_number: "",
        website: "",
        image_url: "",
        cuisine_id: "",
      },
      menu_items: [],
      errors: [],
      showEditRestaurantForm: false,
    };
  },
  created: function () {
    axios.get("/restaurants/" + this.$route.params.id).then((response) => {
      this.restaurant = response.data.restaurants[0];
      this.menu_items = response.data.menu_items;
    });
  },
  methods: {
    destroyRestaurant: function () {
      axios.delete("/restaurants/" + this.$route.params.id).then((response) => {
        this.$router.push("/restaurants");
      });
    },
    updateRestaurant: function () {
      var clientParams = {
        name: this.restaurant.name,
        address: this.restaurant.address,
        phone_number: this.restaurant.phone_number,
        website: this.restaurant.website,
        image_url: this.restaurant.image_url,
        cuisine_id: this.restaurant.cuisine_id,
      };

      const jwt = localStorage.getItem("jwt");
      axios
        .patch("/restaurants/" + this.$route.params.id, clientParams, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((response) => {
          this.$router.push("/restaurants/");
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.$router.push("/login/");
          }
          this.errors = error.response.data.errors;
        });
    },
    showEditRestaurantFormMethod: function () {
      this.showEditRestaurantForm = !this.showEditRestaurantForm;
    },
  },
  watch: {
    $route: function () {
      axios.get("/restaurants/" + this.$route.params.id).then((response) => {
        this.restaurants = response.data;
      });
    },
  },
};
</script>