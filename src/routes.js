import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Body.vue'
import About from './components/About.vue'
Vue.use(VueRouter)
const router=new VueRouter({
	routes: [
	{
		path:'/',
		component:Home
	},

	{
		path:'/about-us',
		component:About
	}

	]
})
 
export default router

