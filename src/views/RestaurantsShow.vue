<template>
  <div class="restaurants-show">

    <div class="row">
      <div class="col">
        <h4> {{restaurant.name}}</h4>
        <h4> {{restaurant.address}}</h4>
        <h4>{{restaurant.phone_number}}</h4>
        <a :href="`${restaurant.website}`"><h4>Website</h4></a>
        <img class="img-restaurant" :src="restaurant.image_url" >
        <h4>Cuisine ID: {{restaurant.cuisine_id}}</h4>
        <Carousel :menu_items="menu_items"/>
      </div>
     
       <!-- <div>
         <button v-on:click="showEditRestaurantFormMethod()">Edit Restaurant</button>
          <button class="btn btn-info m-2" v-on:click="destroyRestaurant()">Delete</button>
        </div> -->
     </div> 

     <!-- <div v-if="showEditRestaurantForm">
        <div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div>
                  <h4>Edit Restaurant</h4>
                </div>
               </div>
            </div>
          </div>
        </div> -->

       <!-- <div>
          <button v-on:click="restaurant.showEditRestaurantForm = !restaurant.showEditRestaurantForm">Edit Menu Item</button>

          <div v-if="restaurant.showEditRestaurantForm">
            <div class="container">
              <div class="row">
                <form class="col" v-on:submit.prevent="updateRestaurant()">
                  <h1>Edit Restaurant</h1>
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>

                  <div class="form-group">
                    <label>Name: </label>
                    <input class="form-control" type="text" v-model="restaurant.name">
                  </div>

                  <div class="form-group">
                    <label>Address: </label>
                    <input class="form-control" type="text" v-model="restaurant.address">
                  </div>

                  <div class="form-group">
                    <label>Phone Number: </label>
                    <input class="form-control" type="text" v-model="restaurant.phone_number">
                  </div>


                  <div class="form-group">
                    <label>Website: </label>
                    <input class="form-control" type="text" v-model="restaurant.website">
                  </div>

                  <div class="form-group">
                    <label>Image URL: </label>
                    <input class="form-control" type="text" v-model="restaurant.image_url">
                  </div>

                  <div class="form-group">
                    <label>Cuisine ID: </label>
                    <input class="form-control" type="text" v-model="restaurant.cuisine_id">
                  </div>


                  <input class="btn btn-info m-2" type="submit" value="Save">
                  <button class="btn btn-info m-2" v-on:click="destroyRestaurant()">Delete</button>
                </form>

              </div>
            </div>
          </div>
        </div>

</div> -->
</div>
</template>

<style>
body {
  background-image: url("/paper_2.png");
}

.img-restaurant {
  width: 450px;
  height: 450px;
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