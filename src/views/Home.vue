<template>

        <div class="mt-10">
            <router-link  to="/detail">
                <article v-for="task in items" :key="task.id">
                <ul class="card py-3 textPrimary">
                    <li class="h5 text-decoration-none"> {{task.title}}</li>

                    <li class="text-decoration-none"> {{task.title}}</li>

                    <li>Categoria: {{task.category}}</li>

                    <li>{{task.description}}</li>
                    
                    <li>{{task.frecuency}}</li>

                </ul>
                </article>
            </router-link>
        </div>

</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import tasks from '@/assets/data/api.json'

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

</style>



