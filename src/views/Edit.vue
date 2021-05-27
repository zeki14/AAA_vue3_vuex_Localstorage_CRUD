<template>
  Editar {{$route.params.id}} - {{task}}
  <form @submit.prevent="updateTask(task)">
        <InputNewTask :task="task" />
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InputNewTask from "../components/InputNewTask";
export default {
    components: {
        InputNewTask
    },
    computed:{
        ...mapState(['task'])
    },
    methods: {
        ...mapActions(['setTask','updateTask'])
    },
    created(){
        this.setTask(this.$route.params.id)
    }
}
</script>

