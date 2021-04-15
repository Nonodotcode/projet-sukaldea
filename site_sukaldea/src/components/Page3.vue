<template>
  <div id="app3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Planning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Panier de courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    <h1 class="title">CONNEXION</h1>
    <div class="connect">
      <form action="submit">
        <label>Pseudo :</label>
        <br />
        <input type="text" />
        <br />
        <label>Mot de passe :</label>
        <br />
        <input type="password" />
        <br />
        <div class="btn-connect">
          <button type="submit" class="btn btn-primary">Se connecter</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Connexion"
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap");
</style>