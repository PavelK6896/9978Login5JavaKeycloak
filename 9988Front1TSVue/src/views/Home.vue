<template>
  <div class="home">
    <h1>home</h1>
    <div>
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import axios from "axios";
import {keycloak} from "@/main";


export default defineComponent({
  name: 'Home',
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
});
</script>
