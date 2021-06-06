<template>
  <div class="about">
    <HelloWorld></HelloWorld>
    <h1>about</h1>
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
      user: {}
    }
  },
  mounted() {
    console.log(keycloak.token)
    axios.get('http://localhost:8081/api/2', {
      headers: {
        'Authorization': `Bearer ${keycloak.token}`,
        'Access-Control-Allow-Origin': `*`
      }
    }).then(response => {
      console.log("---")
      this.user = response.data
    })
  }
}
</script>

<style scoped>

</style>