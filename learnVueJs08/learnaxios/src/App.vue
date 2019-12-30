<template>
  <div id="app">
    <div>{{result}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
	data() {
		return {
			result: ''
		}
	}
	created() {
		axios({
			url: 'http://httpbin.org/',
		}).then(res => {
			console.log(res);
			this.result = res
		})
	},
  components: {
    
  }
}
</script>

<style>

</style>
