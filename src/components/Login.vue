<template>
	<div class="col-md-6">
		<h3>Login</h3>
		<div class="form-group">
			<input 
				type="text"
				placeholder="email" 
				class="form-control"
				v-model="email"
			/>
			<input 
				type="password"
				placeholder="Password" 
				class="form-control"
				v-model="password"
			/>
			<button class="btn btn-primary" @click="login">Login</button>			
		</div>
		<br>
		<router-link to="/signup">Not a user? Sign up</router-link> 
		<br>
		<p>{{error.message}}</p>
		<br>
	</div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

	export default{
		data(){
			return {
				email:'',
				password:'',
				error:{
					message:''
				}
			}
		},
		methods:{
			login(){ 
				firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
				.catch(error=>{
					this.error=error
				})
			}
		}
	}
</script>