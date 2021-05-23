<template>
    <main>
    
        <section>
            <article v-for="task in items" :key="task.id">
            
                <ul class="card py-3 textPrimary shadow-sm p-3 mb-4 bg-body">
                    <li class="h5 textInBlack mb-1 "> {{task.title}}</li>

                    <li class="h6 fst-italic fw-light mx-5">Categoria: {{task.category}}</li>
                    <li class="p textInBlack fw-bolder mx-5">{{task.frecuency}}</li>

                    <li class="p textInBlack">{{task.description}}</li>

                    <li v-for="(step, index)  in task.steps" :key="index">{{task.steps}}</li>
                     

                </ul>
            </article>
            
    
        <router-link class="btn-complete" to="/success" tag="button">Completada</router-link>
        </section>

    </main>
</template>

<script>

import tasks from '@/assets/data/data.json'

export default {
    name: 'Detail',
 
    computed:{ items() { 
            return tasks.map( (task) => { 
                return Object.assign( task, { steps: task.steps }) 
                
            }) 
        }

    }
}

</script>


<style scoped> 

 

    main section {
        margin-top: 12vh;
    
    }

    main section article {
        width: 80vw;
        height: 20vh;
        margin: auto;
        margin-top: 2vh; 
        border-radius: 10px;
        background-color: var(--input-color);
        /* display: grid;
        grid-template-areas: "i t" "i d" "i p" "i ic";
        grid-template-columns: 30vw 1fr;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
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

    main section .btn-complete {
        /* display: flex;
        justify-content: center;
        align-content: center; */
        background-color: khaki;
    }


</style>