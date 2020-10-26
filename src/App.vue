<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-text">
      <a href="/"><img  class="logo-img" src="/tastebuddies.png" alt="" /></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active" v-on:click="refreshPage()">
             <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="/login"> Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style >
.nav-text {
  font-size: 18px;
  font-weight: bold;
}
body {
  background-image: url("/paper_2.png");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo-img {
  width: 25%;
  margin-right: 40%;
}
@media only screen and (max-width: 760px) {
  .logo-img {
    margin-left: 40%;
    margin-right: 0%;

  }
}
</style>

<script>
export default {
  methods: {
    refreshPage() {
      window.location.reload(false);
      console.log("Im running");
    }
  }
}
</script>
