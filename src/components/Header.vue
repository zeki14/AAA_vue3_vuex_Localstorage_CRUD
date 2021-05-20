<template>
   <header class="fixed-top shadow align-items-center bgPrimaryColor" >
      <h1 class="h1 m-4">Bienvenid@ a tu lista de retos</h1>
      <img class="img-fluid m-4" src="../assets/icons/asperlog.png" alt="avatar de usuario">
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

    header {
        display: flex;
        justify-content:space-between;
    }
    header img {
      width: 13vw;
      height: 13vw;
    }
</style>