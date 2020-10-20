<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="row pt-5 mx-auto" style="font-size: 15px;">
        <div class="col-8 form-group mx-auto" >
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="username">
        </div>
        <div class="col-8 form-group mx-auto">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
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
      email: "",
      password: "",
      // passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        username: this.username,
        email: this.email,
        password_digest: this.password,
      };
      axios
        .post("/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>