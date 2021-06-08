<template>
  <div class="about">
    <HelloWorld></HelloWorld>
    <h1>about</h1>

    <p>{{ user }}</p>

    <div>
      <button @click="button1">button1</button>
    </div>

  </div>
</template>


<script>
import HelloWorld from "@/components/HelloWorld";
import {keycloak} from "@/main";
import axios from "axios";

export default {
  name: "About",
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: "------"
    }
  },
  methods: {
    button1() {

      console.log(keycloak)
      axios.get('http://localhost:8081/api/1', {
        headers: {
          'Authorization': `Bearer ${keycloak.token}`
        }
      }).then(response => {
        console.log("---")
        this.user = response.data
      })
    },
  }
}
</script>

<style scoped>

</style>