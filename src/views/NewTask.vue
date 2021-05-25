<template>
      <section >
      <form class="mt-1 mb-1" >
        <label class="mb-1">Nombre del reto</label>
        <input class="mt-1 mb-1" type="text" placeholder="Nombre del reto">
       
        <label for="category" class="mt-2 mb-1">Categoría</label>
        <select class="mt-1 mb-1" id= "category" name="category" placeholder="Categoria">
                <option value="value1">Autocuidado</option>
                <option value="value2" >Comunidad</option>
                <option value="value3">Relación o vida social</option>
                <option value="value3">Hogar</option>
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
        <div class="d-flex flex-row justify-content-between">
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
        </div>
        <button class="btn btn-secondary btn-lg mt-3">Guardar</button>
        
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

  section {
    padding-bottom: 80px;
  }

   section form {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    margin: 2em;
  }

   section form input,
   section form select,
   section form textarea {
    margin-top: 2vh;
    padding: 1vh 1vh 1vh 1vh;
    border: none;
    border-radius: 5px;
  }

   section form input:focus {
    outline: none;
  }


</style>