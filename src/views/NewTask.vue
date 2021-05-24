<template>
      <section>
      <form class="mt-1 mb-1" >
        <label class="mb-1">Nombre del reto</label>
        <input class="mt-1 mb-1" type="text" placeholder="Nombre del reto">
       
        <label for="category" class="mt-2 mb-1">Categoría</label>
        <select class="mt-1 mb-1" id= "category" name="category" placeholder="Categoria">
                <option value="value1">Hogar</option>
                <option value="value2" >En la calle</option>
                <option value="value3">Actividad social</option>
        </select>

        <label for="description" class="mt-2 mb-1">Descripción</label>
        <textarea class="mt-1 mb-1" id="description" name="description" rows="4" cols="50"  placeholder="Escribe un texto...">
        </textarea>

        <label class="mt-2 mb-1">Pasos</label>
        <textarea class="mt-1 mb-1" id="steps" name="steps" rows="4" cols="50"  placeholder="Escribe los pasos a seguir...">
        </textarea>

        <label class="mt-2 mb-1">Pistas</label>
        <textarea class="mt-1 mb-1" id="clues" name="clues" rows="4" cols="50"  placeholder="Escribe las pistas...">
        </textarea>

        <label class="mt-2 mb-1">Frecuencia</label>
        <select class="mt-1 mb-1" name="veces">
                <option value="value1">1 vez</option>
                <option value="value2">2 veces</option>
                <option value="value3">3 veces</option>
                <option value="value1">4 vez</option>
                <option value="value2" >5 veces</option>
                <option value="value3">6 veces</option>
                <option value="value3">Cada día</option>
        </select>
        <select class="mt-2 mb-1" name="periodo">
                <option value="value1">a la semana</option>
                <option value="value2">al mes</option>
        </select>

      
        
        <button class="btn-saving" @click="activeSingUpForm = false">Guardar</button>
      </form>
    </section>
</template>

<script scoped>

export default {
  components: {
  }
}

</script>


<style scoped>

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }

  main section form {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    margin: 2em;
  }

  main section form input,
  main section form select,
  main section form textarea {
    margin-top: 2vh;
    padding: 1vh 1vh 1vh 1vh;
    border: none;
    border-radius: 5px;
  }

  main section form input:focus {
    outline: none;
  }



  .btn-saving {
    margin-top: 3vh;
    padding: 1vh;
  }

</style>