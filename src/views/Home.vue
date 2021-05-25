<template>
    <main>
    <!-- <Header /> -->
        <section>
            <router-link to="/detail">
                <article v-for="task in tasks" :key="task.id">

                    <h3 class="btn btn-danger"> {{task.title}}</h3>

                    <h3> {{task.name}}</h3>

                    <p>Categoria: {{task.category}}</p>
                    <h5>{{task.description}}</h5>
                    <p>{{task.frecuency}}</p>
                    <button class="btn btn-danger btn-sm" @click="deleteTareas(task.id)">
                        Eliminar
                    </button>
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
            </router-link>
        </section>
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
    methods: {
        ...mapActions(['deleteTask'])
    }
}
</script>


<style scoped> 

    main {
        background-color: var(--secondary-color);
    }

    main section {
        margin-top: 8vh;
    }

    main section article {
        width: 80vw;
        height: 20vh;
        margin: auto;
        margin-top: 2vh; 
        border-radius: 10px;
        background-color: var(--input-color);
    }

    main section article h3 {
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
        background-color: var(--contact-color);
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    main section article span {
        grid-area: ic;
        padding: 1vh;
    }

</style>



