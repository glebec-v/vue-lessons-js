<template>
  <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-light">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <router-link to="/" class="navbar-brand">
              Vue.js course app
          </router-link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav mr-auto">
                  <router-link tag="li" active-class="active" to="/" exact>
                      <a class="nav-link">Home</a>
                  </router-link>
              </ul>
          </div>
      </nav>

      <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
