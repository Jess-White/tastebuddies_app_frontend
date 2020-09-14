<template>
  <div class="cuisines-index">

    <div>

    <div class="container">
      <h1>Cuisines</h1>
      <div class="row">
        <div class="col" v-for="cuisine in cuisines">
          <router-link v-bind:to="'/cuisines/' + cuisine.id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-name">{{cuisine.type}}</h5>
              </div>
            </div>
          </router-link>
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
      cuisines: [],
      id: "",
      type: "",
      errors: [],
    }
  },
  created: function () {
    axios.get("/cuisines/").then((response) => {
      this.cuisines = response.data;
    });
  },
  methods: {
  },
};
</script>


