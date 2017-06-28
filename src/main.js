import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp'

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'

const router=new VueRouter({
	mode:'history',
	routes: [
		{path:'/dashboard',component:Dashboard},
		{path:'/login',component:Login}
	]
})

firebaseApp.auth().onAuthStateChanged(user=>{
	if(user){
		router.push('/dashboard')
	}else{
		router.replace('/login')
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
