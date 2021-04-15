<template>
  <div id="app1">
    <div class="links">
      <table>
        <tr>
          <td>
            <router-link to="/register">Inscription</router-link>
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="/connexion">Connexion</router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page1"
};
</script>
