<template>

    <div class="mt-10">
        
        <article v-for="task in items" :key="task.id">
            <router-link  class="text-decoration-none"  to="/detail">
                <ul class="card py-3 textPrimary shadow-sm p-3 mb-4 bg-body">
                    <li class="h5 textInBlack mb-1 "> {{task.title}}</li>

                    <li class="h6 fst-italic fw-light mx-5">Categoria: {{task.category}}</li>

                    <li class="p textInBlack">{{task.description}}</li>
                     
                    <li class="p textInBlack fw-bolder mx-5">{{task.frecuency}}</li>

                </ul>
            </router-link>
        </article>

    </div>

</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import tasks from '@/assets/data/ejemplos.json'

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  },
  computed: {
    items() {
      return tasks.map((task) => {
        return task
      })
    }

  }
}
</script>


<style scoped> 

    main section {

        margin-top: 8vh;
    }

    main section article {
        /* width: 80vw; */
        height: 20vh;
        margin: auto;
        margin-top: 2vh; 
        border-radius: 10px;
        /* display: grid;
        grid-template-areas: "i t" "i d" "i p" "i ic";
        grid-template-columns: 30vw 1fr;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
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
    ul {
        border-radius: 6px;
    }

</style>



