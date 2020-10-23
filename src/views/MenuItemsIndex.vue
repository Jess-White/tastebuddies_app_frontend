<template>
  <div class="menu-items-index">
    <div class="container">
      <div class="row"></div>
      <form class="col"
      v-on:submit.prevent="createMenuItem()">
        <h1>New Menu Item</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name </label>
          <input class="form-control" type="text" v-model="name">
        </div>
        <div class="form-group">
          <label>Description </label>
          <input class="form-control" type="text" v-model="description">
        </div>
        <div class="form-group">
          <label>Image Url: </label>
          <input class="form-control" type="text" v-model="image_url">
        </div>
        <div class="form-group">
          <label>Restaurant ID </label>
          <input class="form-control" type="text" v-model="restaurant_id">
        </div>
        <input class="btn btn-info" type="submit" value="Add New Menu Item">
      </form>
    </div>
    <div class="container">
      <h1>Menu Items</h1>
      <div class="row">
        <div class="col" v-for="menu_item in menu_items">
          <router-link v-bind:to="'/menu_items/' + menu_item.id">
            <div class="card">
              <div class="card-body text-info">
                <h5 class="card-name">{{menu_item.name}}</h5>
              </div>
            </div>
          </router-link>
          <div>
            <button v-on:click="menu_item.showEditMenuItemForm = !menu_item.showEditMenuItemForm">Edit Menu Item</button>
            <div v-if="menu_item.showEditMenuItemForm">
                  <div class="container">
                    <div class="row">
                      <form class="col" v-on:submit.prevent="updateMenuItem()">
                        <h1>Edit Menu Item</h1>
                        <ul>
                          <li class="text-danger" v-for="error in errors">{{ error }}</li>
                        </ul>
                        <div class="form-group">
                          <label>Name: </label>
                          <input class="form-control" type="text" v-model="menu_item.name">
                        </div>
                        <div class="form-group">
                          <label>Description: </label>
                          <input class="form-control" type="text" v-model="menu_item.description">
                        </div>
                        <div class="form-group">
                          <label>Image URL: </label>
                          <input class="form-control" type="text" v-model="menu_item.image_url">
                        </div>
                        <div class="form-group">
                          <label>Restaurant: </label>
                          <input class="form-control" type="text" v-model="menu_item.restaurant_id">
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

<script>
var axios = require("axios");

export default {
  data: function () {
    return {
      menu_items: [],
      id: "",
      name: "",
      description: "",
      image_url: "",
      restaurant_id: "",
      errors: [],
    };
    showEditMenuItemsForm: false;
  },
  created: function () {
    axios.get("/menu_items/").then((response) => {
      this.menu_items = response.data;
    });
  },
  methods: {
    createMenuItem: function () {
      var clientParams = {
        name: this.name,
        description: this.description,
        image_url: this.image_url,
        restaurant_id: this.restaurant_id
      };

      axios
        .post("/menu_items/", clientParams)
        .then((response) => {
          this.$router.push("/menu_items");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
    destroyMenuItem: function () {
      axios
        .delete("/menu_items/" + this.$route.params.id)
        .then((response) => {
          this.$router.push("/menu_items/");
        });
    },
    updateMenuItem: function () {
      var clientParams = {
        name: this.name,
        description: this.description,
        image_url: this.image_url,
        restaurant_id: this.restaurant_id
      };

      const jwt = localStorage.getItem("jwt");
      axios
        .patch("/menu_items/" + this.$route.params.id, clientParams, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((response) => {
          this.$router.push("/menu_items/");
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
