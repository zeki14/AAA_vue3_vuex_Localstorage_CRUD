<template>
    <main>
    <!-- <Header /> -->
       
            <!-- <router-link to="/detail"> -->
              <!-- <ul @click="goTodetail(task.id)" class="card py-3 textPrimary shadow-sm li-3 mb-4 bg-body"> -->
                <!-- <section > -->
                
                <article  v-for="task in tasks" :key="task.id">
                 <ul @click="goTodetail(task.id)" class="card py-3 textPrimary shadow-sm p-3 mb-4 bg-body">
                    <li  class="h5 textInBlack mb-1 "> {{task.name}}</li>

                    <li class="h6 fst-italic fw-light mx-5">Categoria: {{task.category}}</li>

                    <li class="p textInBlack">{{task.description}}</li>
                     
                    <li class="p textInBlack fw-bolder mx-5">{{task.frecuency}}</li>
                    </ul>
                    <!-- <button class="btn btn-danger btn-sm" @click="deleteTareas(task.id)">
                        Eliminar
                    </button> -->
                    <!-- <router-link
                        class="btn btn-warning ml-2 btn-sm"
                        :to="{
                            name: 'Editar',
                            params: {
                                id: item.id
                            }
                        }"
                    >
                        Editar
                    </router-link> -->
                </article>
            <!-- </router-link> -->
        <!-- </section> -->
    <!-- <Footer /> -->




    </main>
</template>

<script>
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
// import tasks from '@/assets/data/api.json'
import { mapState, mapActions } from "vuex";
export default {
  name: 'Home',
   computed: {
        ...mapState(['tasks'])
    },
    methods:{
        goTodetail(id) {
            let taskId = id
            this.$router.push({name:'Detail',params:{id:taskId}}) }
    }
}
</script>


<style scoped> 


</style>



