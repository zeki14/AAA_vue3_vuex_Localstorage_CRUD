<template>
   <header class=" d-flex flex-row flex-nowrap shadow align-items-stretch justify-content-around bgColor pt-2 pb-1 px-3">
            <h1 class="h1 ">Bienvenid@ <br> a tu lista de retos</h1>
            <img class="img-fluid " src="../assets/icons/asperlog.png" alt="logo asociacion">
  </header>
      <hr class="mb-2 mx-3 bgPrimaryColor">
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

    /* hr {
        border: 1px solid var(--primary-color);
    } */
    header img {
      width: 13vw;
      height: 13vw;
    }
</style>