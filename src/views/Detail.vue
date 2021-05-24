<template>
 
  <div class="container">
   <h1 class="h3 text-primary"><i class="fas fa-info-circle"></i>  {{title}}</h1>
   <div class="col-md-12" v-for="task in items" :key="task.id">
     <div  v-if="taskId == task.id">
        <div class="card p-2 mb-3 mx-3 shadow-sm">
            <h2 class="textInBlack text-center">{{task.title}}</h2>

            <div class="d-flex flex-row justify-content-between">
                <h5 class="h6 fst-italic fw-light mx-2">Categoria: {{task.category}}</h5>
                <p class="p textInBlack fw-bolder mx-2">{{task.frecuency}}</p>
            </div>

            <h6 class="p textInBlack">{{task.description}}</h6>
        </div> 
        <h3 class="p text-primary fw-bolder mx-1"><i class="fs-3 fas fa-shoe-prints"></i>   Pasos a seguir:</h3>
            <ol > 
                <li v-for="step in task.steps" :key="step.key">
                    <p>- {{step}}</p>
                </li>
            </ol> 
   
        <div class="col text-center">
            <router-link class="btn btn-success btn-lg shadow-sm" to="/success" tag="button">¡CONSEGUIDO!</router-link>
        </div>

        <h3 class="p text-primary fw-bolder mx-1"><i  class="fs-3 di fas fa-search-plus"></i>  Algunas pistas:</h3>
            <ol>        
                <li v-for="clue in task.clues" :key="clue.id">
                    <p>- {{clue}}</p>
                </li>
            </ol> 
     </div>
    </div>
  </div>

</template>
<script>
import tasks from '@/assets/data/data.json'

 export default{
    name:'Detail',

    data(){
   return{
    taskId:this.$route.params.id,
    title:"Al detalle:"
        }
    },

    computed: {
        items() {
        return tasks.map((task) => {
            return task
        })
        }
    },
 }
 console.log(tasks)
</script>
    

<style scoped> 

    .card{
        border-radius: 12px;
    }
    .btn{
        width: 250px;
     
    }



</style>