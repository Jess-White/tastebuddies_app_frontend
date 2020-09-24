<template>
  <div class="cuisines-index">

    <div>

    <div class="container">
      <h1>Tastebuddies</h1>
        <ul>
          <div v-for="cuisine in cuisines">
          <div class="form-check" >
            <label id="text" class="form-check-label">
              <input 
                id="myCheck" 
                class="form-check-input" 
                type="checkbox" 
                v-on:click="getCuisine()"
                :value="cuisine.name">
                {{ cuisine.name }}
            </label>
          </div>
          </div>
          
          <button type="button" class="btn btn-success">GO!</button>
        </ul>

    </div>
    </div>
  </div>

</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data() {
    return {
      cuisines: [],
      id: "",
      name: "",
      errors: [],
    }
  },
  created: function () {
    axios.get("/cuisines/").then((response) => {
      this.cuisines = response.data;
    });
  },
  methods: {
    getCuisine() {
      var checkBox = document.getElementById("myCheck")
      var cuisine = this
      // console.log(document.getElementById("text").innerHTML)
      console.log(cuisine);
      const checkedCuisines = [];

      // if (checkBox.checked == true) {
      //   checkedCuisines.push()
      // }
    },
    pickedCuisines() {

    }
  },
};
</script>


