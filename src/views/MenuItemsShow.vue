<template>
  <div class="menu_items-show">

     <div class="row">
       <div class="col">
        <h4>Name: {{menu_item.name}}</h4>
        <h4>Description: {{menu_item.description}}</h4>
        <h4>Image URL: {{menu_item.image_url}}</h4>
        <h4>Restaurant ID: {{menu_item.restaurant_id}}</h4>
       </div>
       <div>
         <button v-on:click="showEditMenuItemFormMethod()">Edit Menu Item</button>
          <button class="btn btn-info m-2" v-on:click="destroyMenuItem()">Delete</button>
        </div>
     </div> 

     <div v-if="showEditMenuItemForm">
       <div>
           <div class="container">
               <div class="row">
               <div class="col">
                   <div>
                       <h4>Edit Menu Item</h4>
                   </div>
               </div>
           </div>
           </div>
       </div>

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
          description: "",
          image_url: "",
          restaurant_id: "",
          
        },
        errors: [],
        showEditMenuItemForm: false
      };
    },
    created: function() {
      axios 
        .get("/menu_items/" + this.$route.params.id)
        .then(response => {
          this.menu_items = response.data
        });
    },
    methods: {
      destroyMenuItem: function() {
        axios
          .delete("/menu_items/" + this.$route.params.id)
          .then(response => {
            this.$router.push("/menu_items");
          });
      },
    updateMenuItem: function() {
      var clientParams = {
        name: this.menu_item.name,
        description: this.menu_item.description,
        image_url: this.menu_item.image_url,
        restaurant_id: this.menu_item.restaurant_id
      };

    const jwt = localStorage.getItem("jwt")
    axios
    .patch("/menu_items/" + this.$route.params.id, clientParams, {
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    })
    .then(response => {
      this.$router.push("/menu_items/");
    }).catch(error => {
      if (error.response.status === 401) {
        this.$router.push("/login/");
      }
      this.errors = error.response.data.errors;
    });
    },
    showEditMenuItemFormMethod: function () {
      this.showEditMenuItemForm = !this.showEditMenuItemForm;
    }
  },
    watch: {
      $route: function() {
        axios
        .get("/menu_items/" + this.$route.params.id)
        .then(response => {
          this.menu_items = response.data;
        });
      }  
    }
};
</script>