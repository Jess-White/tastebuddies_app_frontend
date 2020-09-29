<template>
  <div class="cuisines-index">

    <div>

      <div class="container" v-if="!formCompleted">
        <h1>Tastebuddies</h1>
        <ul>
          <div v-for="cuisine in cuisines">
          <div class="form-check" >
            <label id="text" class="form-check-label">
              <input 
                id="myCheck" 
                class="form-check-input" 
                type="checkbox" 
                v-on:change="getCuisine($event)"
                :value="cuisine.name">
                {{ cuisine.name }}
            </label>
          </div>
          </div>
          
          <button type="button" class="btn btn-success" v-on:click="formCompleted = true">GO!</button>
        </ul>
      </div>
      <div v-else>
        <MenuItemsSwipe :filteredCuisines="filteredCuisines" />
      </div>
    </div>
  </div>

</template>

<style>
</style>

<script>
import MenuItemsSwipe from "@/components/MenuItemsSwipe.vue"
var axios = require("axios");

export default {
  components: {
    MenuItemsSwipe
  },
  data() {
    return {
      cuisines: [],
      id: "",
      name: "",
      errors: [],
      checkedCuisines: [],
      formCompleted: false
    }
  },
  created: function () {
    axios.get("/cuisines/").then((response) => {
      this.cuisines = response.data;
    });
  },
  methods: {
    getCuisine(event) {
      if (event.target.checked) {
        this.checkedCuisines.push(event.target.value)
      } else {
        this.checkedCuisines = this.checkedCuisines.filter(cuisine => {
          return cuisine !== event.target.value
        }) 
      }
    }
  },
  computed: {
    filteredCuisines() {
      return this.cuisines.filter(cuisine => {
         return this.checkedCuisines.includes(cuisine.name)
      })
    }
  }
};
</script>


