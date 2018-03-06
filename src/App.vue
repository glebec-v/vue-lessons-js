<template>
  <div>
      <nav class="navbar fixed-top navbar-expand navbar-dark bg-primary">
          <router-link to="/" class="navbar-brand">
              Vue.js lesson 3
          </router-link>

          <div class="collapse navbar-collapse" id="navbar">
              <ul class="nav navbar-nav">
                  <router-link tag="li" active-class="active" to="/users" exact>
                      <a class="nav-link">Users</a>
                  </router-link>
                  <router-link tag="li" active-class="active" to="/edit" exact>
                      <a class="nav-link">Edit user</a>
                  </router-link>
                  <router-link tag="li" active-class="active" to="/add" exact>
                      <a class="nav-link">Add user</a>
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
