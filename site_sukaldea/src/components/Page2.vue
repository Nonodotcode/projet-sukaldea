<template>
  <div id="app2">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
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

    <h1 class="title">Inscription</h1>
    <div class="register">
      <form action="submit">
        <label>Pseudo :</label>
        <br />
        <input type="text" />
        <br />
        <label>Nom :</label>
        <br />
        <input type="text" required />
        <br />
        <label>Prénom :</label>
        <br />
        <input type="text" required />
        <br />
        <label>Adresse email :</label>
        <br />
        <input type="text" required />
        <br />
        <label>Mot de passe :</label>
        <br />
        <input type="text" required />
        <br />
        <label>Confirmer le mot de passe :</label>
        <br />
        <input type="text" required />
        <br />
        <div class="btn-register">
          <button type="submit" class="btn btn-primary">S'inscrire</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page2",
  components: {}
};
</script>