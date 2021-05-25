<template>
    <section>
        <label >Nombre del reto</label>
        <input 
            type="text" 
            name="name" 
            v-model="task.name" 
            placeholder="Nombre del reto">
       
        <label for="category" >Categoría</label>
        <select 
            id= "category" 
            name="category" 
            v-model="task.category" 
            placeholder="Categoria">
                <option value="value1">Hogar</option>
                <option value="value2" >En la calle</option>
                <option value="value3">Actividad social</option>
        </select>

        <label for="description">Descripción</label>
        <textarea 
            id="description" 
            name="description" 
            v-model="task.description" 
            rows="4" cols="50"  
            placeholder="Escribe un texto...">
        </textarea>

        <label>Pasos</label>
        <textarea 
            id="steps" 
            name="steps"
            v-model="task.steps" 
            rows="4" cols="50"  
            placeholder="Escribe los pasos a seguir...">
        </textarea>

        <label>Pistas</label>
        <textarea 
            id="clues"
             name="clues" 
             v-model="task.clues" 
             rows="4" 
             cols="50"  
             placeholder="Escribe las pistas...">
        </textarea>

        <label>Frecuencia</label>
        <select 
            id="times"
            name="times"
            v-model="task.times">

                <option value="value1">1 vez</option>
                <option value="value2">2 veces</option>
                <option value="value3">3 veces</option>
                <option value="value4">4 vez</option>
                <option value="value5" >5 veces</option>
                <option value="value6">6 veces</option>
                <option value="value7">Cada día</option>
        </select>
        <select 
            id="period"
            name="period"
            v-model="task.period">
                <option value="value1">a la semana</option>
                <option value="value2">al mes</option>
        </select>

        <button 
            class="btn btn-secondary mt-2 btn-block" 
            type="submit"
            :disabled="bloquear"
        >
        Añadir
        </button>
    </section>
</template>

<script>
    export default {
        props:{
            task: Object
        },
        computed: {
            bloquear(){
                return this.task.name === "" ? true : false
            }
        }
    }

</script>

<style scoped>
    label{
        display: block;
    }
   section  input,
   section  select,
   section  textarea {
    margin-top: 2vh;
    padding: 1vh 1vh 1vh 1vh;
    border: none;
    background-color: var(--input-color);
    border-radius: 5px;
  }

   section  input:focus {
    outline: none;
  }



  .btn-saving {
    margin-top: 3vh;
    padding: 1vh;
    background-color: var(--complementary-color);
  }

</style>