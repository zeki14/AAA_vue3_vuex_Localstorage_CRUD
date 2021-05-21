<template>
        <form @submit.prevent="addTask()">
        
        <label>Nombre del reto</label>
        <input type="text" name="name" v-model="name" placeholder="Nombre del reto">
       
        <label for="category" >Categoría</label>
        <select id= "category" name="category" v-model="category" placeholder="Categoria">
                <option value="value1">Hogar</option>
                <option value="value2" >En la calle</option>
                <option value="value3">Actividad social</option>
        </select>

        <label for="description">Descripción</label>
        <textarea id="description" name="description" v-model="description" rows="4" cols="50"  placeholder="Escribe un texto...">
        </textarea>

        <label>Pasos</label>
        <textarea id="steps" name="steps" rows="4" cols="50"  placeholder="Escribe los pasos a seguir...">
        </textarea>

        <label>Pistas</label>
        <textarea id="clues" name="clues" rows="4" cols="50"  placeholder="Escribe las pistas...">
        </textarea>

        <label>Frecuencia</label>
        <select name="times">
                <option value="value1">1 vez</option>
                <option value="value2">2 veces</option>
                <option value="value3">3 veces</option>
                <option value="value4">4 vez</option>
                <option value="value5" >5 veces</option>
                <option value="value6">6 veces</option>
                <option value="value7">Cada día</option>
        </select>
        <select name="period">
                <option value="value1">a la semana</option>
                <option value="value2">al mes</option>
        </select>

            <input type="submit" value="Submit" class="btn">
    </form>
</template>

<script>
    import uuid from 'uuid/v4';
    export default {
        name: "addNewTask",
        data(){
            return {
               
                name: '',
                category:'',
                description:'',
                steps:'',
                clues:'',
                times:'',
                period:''
            }
        },
        methods: {
            addTask(e){
                e.preventDefault();
                const newTaskTodo={
                    name: this.name,
                    id: uuid(),
                    category: this.category,
                    description: this.description,
                    steps: this.steps,
                    clues: this.clues,
                    times: this.times,
                    period: this.period

                }
                //send to parent
                this.$emit('add-task-event', newTaskTodo);
                //clear the field
                this.title='';
            }
        }
    }
</script>

<style>

</style>