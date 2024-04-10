<template>
  <div class="site-content">
    <div class="container">
      <div class="login">
        <h1>
          Login
        </h1>
      </div>
      <form class="form-container">
        <div class="form-group">
          <label class="icon"
          for="email">
        <i class="fas fa-envelope"></i></label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style scoped>
@media (max-width: 600px) {
    .container {
        width: 100%;
    }

    .form-group {
        max-width: 100%;
    }

    .form-control {
        width: 100%;
    }
}

@media (min-width: 601px) and (max-width: 1024px) {
    .container {
        width: 80%;
        margin: auto;
        justify-content: center;
        align-items: center;
    }

    .form-group {
        max-width: 100%;
    }

    .form-control {
        width: 100%;
    }
}
</style>