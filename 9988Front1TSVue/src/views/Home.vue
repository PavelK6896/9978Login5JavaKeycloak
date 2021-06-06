<template>
  <div class="home">
    <h1>home</h1>
    <div>
      <p>{{ user.name }}</p>
    </div>

    <div>
      <button @click="button1">button1</button>
    </div>
    <div>
      <button @click="button2('Form cannot be submitted yet.', $event)">button2</button>
    </div>
    <div>
      <button @click="button3">button3</button>
    </div>
    <div>
      <button @click="button4">button4</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import axios from "axios";
import {keycloak} from "@/main";


interface IdV {
  vOne?: string
  vTwo?: string
  vFree?: string
}

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
  methods: {
    button1() {
      const data = [{
        vOne: '11',
        vTwo: '22',
        vFree: "33",
        vFour: "44",
      }, "dd", 4324, "ff"]

      axios.delete('http://localhost:8081/1', {
        data: data
      }).then(response => {
        console.log("+" + response.data)
      }).catch(error => {
        console.log("-" + error)
      })

    },
    button2(message: string, event: any) {
      if (event) {
        console.log(event)
        event.preventDefault()
      }

      const data: IdV = {
        vOne: '11',
        vTwo: '22',
        vFree: "33",
        vFour: "44",
        vFour2: "h"

      }

      axios.delete('http://localhost:8081/2', {
        data,
        headers: {
          'Authorization': `Bearer ${keycloak.token}`,
          'Access-Control-Allow-Origin': `*`
        }
      }).then(response => {
        console.log("+" + response.data)
      }).catch(error => {
        console.log("-" + error)
      })

    },
    button3() {
      const data = {
        vOne: '11',
        vTwo: '22',
        vFree: "33",
        vFour: "44",
        vFour2: {d: "d"},
        vFour3: {d: {f: [1, 2, 3, 4]}}
      }

      axios.delete('http://localhost:8081/3', {
        data
      }).then(response => {
        console.log("+" + response.data)
      }).catch(error => {
        console.log("-" + error)
      })

    },
    button4() {
      const data = {
        vFour: "44",
        vFour2: {d: "d"},
        vFour3: {d: {f: [1, 2, 3, 4]}}
      }

      axios.delete('http://localhost:8081/4', {
        data: JSON.stringify(data)
      }).then(response => {
        console.log("+" + response.data)
      }).catch(error => {
        console.log("-" + error)
      })

    },

  },

});
</script>
