<template>
   <header class="fixed-top shadow" >
      <h3>Bienvenido!</h3>
      <img src="../assets/icons/user.svg" alt="avatar de usuario">
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
        background-color: var(--secondary-color);
    }

    header img {
        width: 9vw;
        height: 9vw;
    }

</style>