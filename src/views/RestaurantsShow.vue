<template>
  <div class="restaurants-show">

     <div class="row">
       <div class="col">
        <h4>Name: {{restaurant.name}}</h4>
        <h4>Address: {{restaurant.description}}</h4>
        <h4>Phone Number: {{restaurant.image_url}}</h4>
        <h4>Website: {{restaurant.restaurant_id}}</h4>
        <h4>Image URL: {{restaurant.image_url}}</h4>
        <h4>Cuisine ID: {{restaurant.cuisine_id}}</h4>
       </div>
       <div>
         <button v-on:click="showEditRestaurantFormMethod()">Edit Restaurant</button>
          <button class="btn btn-info m-2" v-on:click="destroyRestaurant()">Delete</button>
        </div>
     </div> 

     <div v-if="showEditRestaurantForm">
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
       </div>

       <div>
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
                        <button class="btn btn-info m-2" v-on:click="destroyMenuItem()">Delete</button>
                      </form>

                    </div>
                  </div>
            </div>
          </div>

</div>
</div>
</template>

<style></style>

<script>
var axios = require('axios');

  export default {
    data: function() {
      return {
        menu_item: {
          id: "",
          name: "",
          address: "",
          phone_number: "",
          website: "",
          image_url: "",
          cuisine_id: ""
          
        },
        errors: [],
        showEditRestaurantForm: false
      };
    },
    created: function() {
      axios 
        .get("/restaurants/" + this.$route.params.id)
        .then(response => {
          this.restaurants = response.data
        });
    },
    methods: {
      destroyMenuItem: function() {
        axios
          .delete("/restaurants/" + this.$route.params.id)
          .then(response => {
            this.$router.push("/restaurants");
          });
      },
    updateMenuItem: function() {
      var clientParams = {
        name: this.restaurant.name,
        address: this.restaurant.address,
        phone_number: this.restaurant.phone_number,
        website: this.restaurant.website,
        image_url: this.restaurant.image_url,
        cuisine_id: this.restaurant.cuisine_id
      };

    const jwt = localStorage.getItem("jwt")
    axios
    .patch("/restaurants/" + this.$route.params.id, clientParams, {
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    })
    .then(response => {
      this.$router.push("/restaurants/");
    }).catch(error => {
      if (error.response.status === 401) {
        this.$router.push("/login/");
      }
      this.errors = error.response.data.errors;
    });
    },
    showEditRestaurantFormMethod: function () {
      this.showEditRestaurantForm = !this.showEditRestaurantForm;
    }
  },
    watch: {
      $route: function() {
        axios
        .get("/restaurants/" + this.$route.params.id)
        .then(response => {
          this.restaurants = response.data;
        });
      }  
    }
};
</script>