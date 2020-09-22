<template>
  <div class="cuisines-index">

    <div>

    <div class="container">
      <h1>Tastebuddies</h1>
      <div class="row">
        <div class="col" v-for="cuisine in cuisines">
          <div class="form-check">
            <label id="text" class="form-check-label" :name="cuisine">
              <input id="myCheck" class="form-check-input" type="checkbox" aria-label="Checkbox for following text input" v-on:click="getCuisineById()">
              {{ cuisine.name }}
            </label>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-success">GO!</button>
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
      console.log(response.data);
      this.cuisines = response.data;
    });
  },
  methods: {
    getCuisineById() {
      var checkBox = document.getElementById("myCheck")
      var cuisine = document.getElementById("text")
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


