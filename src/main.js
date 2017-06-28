import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp'

Vue.use(VueRouter)

import store from './store'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

const router=new VueRouter({
	mode:'history',
	routes: [
		{path:'/dashboard',component:Dashboard},
		{path:'/login',component:Login},
		{ path: '/signup', component: Signup }
	]
})

firebaseApp.auth().onAuthStateChanged(user=>{
	if(user){
		store.dispatch('signIn',user) 
		router.push('/dashboard')
	}else{
		router.replace('/login')
	}
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
