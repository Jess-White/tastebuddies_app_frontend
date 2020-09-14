<template>
  <div class="restaurants-index">

    <div class="container">
      
      <div class="row"></div>
      <form class="col"
      v-on:submit.prevent="createRestaurant()">
        <h1>New Restaurant</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Name </label>
          <input class="form-control" type="text" v-model="name">
        </div>

        <div class="form-group">
          <label>Address </label>
          <input class="form-control" type="text" v-model="address">
        </div>

        <div class="form-group">
          <label>Phone Number </label>
          <input class="form-control" type="text" v-model="phone_number">
        </div>

        <div class="form-group">
          <label>Website </label>
          <input class="form-control" type="text" v-model="website">
        </div>

        <div class="form-group">
          <label>Image Url: </label>
          <input class="form-control" type="text" v-model="image_url">
        </div>

        <div class="form-group">
          <label>Cuisine ID </label>
          <input class="form-control" type="text" v-model="cuisine_id">
        </div>

        <input class="btn btn-info" type="submit" value="Add New Restaurant">
      </form>
    </div>

    <div class="container">
      <h1 >Restaurants</h1>
      <div class="row">
        <div class="col" v-for="restaurant in restaurants">
          <router-link v-bind:to="'/restaurants/' + restaurant.id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-name">{{ restaurant.name }}</h5>
              </div>
            </div>
          </router-link>
          <div>
            <button v-on:click="restaurant.showEditRestaurantForm = !restaurant.showEditRestaurantForm">Edit Restaurant</button>

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
                          <label>Phone_number: </label>
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
                        <button class="btn btn-info m-2" v-on:click="destroyMenuItem()">Delete</button>
                      </form>

                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function () {
    return {
      restaurants: [],
      id: "",
      name: "",
      address: "",
      phone_number: "",
      website: "",
      image_url: "",
      cuisine_id: "",
      errors: [],
    };
    showEditRestaurantForm: false;
  },
  created: function () {
    axios.get("/restaurants/").then((response) => {
      this.restaurants = response.data;
    });
  },
  methods: {
    createRestaurant: function () {
      var clientParams = {
        name: this.name,
        address: this.address,
        phone_number: this.phone_number,
        website: this.website,
        image_url: this.image_url,
        cuisine_id: this.cuisine_id
      };

      axios
        .post("/restaurants/", clientParams)
        .then((response) => {
          this.$router.push("/restaurants");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
    destroyRestaurant: function () {
      axios
        .delete("/restaurants/" + this.$route.params.id)
        .then((response) => {
          this.$router.push("/restaurants/");
        });
    },
    updateRestaurant: function () {
      var clientParams = {
        name: this.name,
        address: this.address,
        phone_number: this.phone_number,
        website: this.website,
        image_url: this.image_url,
        cuisine_id: this.cuisine_id
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
  },
};
</script>
