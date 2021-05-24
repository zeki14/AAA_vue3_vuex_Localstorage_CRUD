<template>

    <div class="mt-10">
        
        <article v-for="task in items" :key="task.id">
            <!-- <router-link  class="text-decoration-none"  to="/detail"> -->
            
                <ul @click="goTodetail(task.id)" class="card py-3 textPrimary shadow-sm p-3 mb-4 bg-body">
                    <li  class="h5 textInBlack mb-1 "> {{task.title}}</li>

                    <li class="h6 fst-italic fw-light mx-5">Categoria: {{task.category}}</li>

                    <li class="p textInBlack">{{task.description}}</li>
                     
                    <li class="p textInBlack fw-bolder mx-5">{{task.frecuency}}</li>

                </ul>
            <!-- </router-link> -->
        </article>

    </div>

</template>

<script>
import tasks from '@/assets/data/data.json'

export default {
    name: 'Home',

    computed: {
        items() {
        return tasks.map((task) => {
            return task
        })
        }
    },

    methods:{
        goTodetail(id) {
            let taskId = id
            this.$router.push({name:'Detail',params:{id:taskId}}) }

    }
  }
    console.log(tasks)
</script>


<style scoped> 

    main section {

        margin-top: 8vh;
    }

    main section article {
        height: 20vh;
        margin: auto;
        margin-top: 2vh; 
        border-radius: 10px;
    }

    main section article li {
        grid-area: t;
        padding: 1vh;
    }

    main section article h5:nth-child(2) {
        grid-area: d;
        padding: 1vh;
    }

    main section article h5:nth-child(3) {
        grid-area: p;
        padding: 1vh;
    }

    main section article img {
        grid-area: i;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    main section article span {
        grid-area: ic;
        padding: 1vh;
    }
    .card {
        border-radius: 12px;
    }

</style>



