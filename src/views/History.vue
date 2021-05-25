<template>
 
  <div class="container">
        <h1 class="h2 text-primary text-center mb-5 mt-3"><i class="fas fa-history"></i>  {{title}}</h1>
        <div class="col-md-12" v-for="task in items" :key="task.id">
            <h5 class="textInBlack ">{{task.title}}</h5>
            <p class="p textInBlack fw-light mx-3">{{task.frecuency}}</p>
        </div> 

  </div>

</template>
<script>
import tasks from '@/assets/data/data.json'

 export default{
    name:'Detail',

    data(){
   return{
    title:"Historial de logros:"
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
</script>
    

<style scoped> 


    .btn{
        width: 250px;
    }
    .container{
        padding-bottom: 80px;
    }



</style>