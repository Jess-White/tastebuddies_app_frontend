<template>
  <div class="login container">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="row pt-5 mx-auto" style="font-size: 15px;">
        <div class="col-8 form-group mx-auto">
          <label>Username:</label>
          <input type="text" class="form-control" v-model="username">
        </div>
        <div class="col-8 form-group mx-auto">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
      </div>
      <input type="submit" class="btn btn-secondary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      username: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("/login", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.accessToken;
          localStorage.setItem("jwt", response.data.accessToken);
          this.$router.push("/cuisines");
        })
        .catch((error) => {
          this.errors = ["Invalid username or password."];
          this.username = "";
          this.password = "";
        });
    },
  },
};
</script>