export default defineNuxtRouteMiddleware((to, from) =>{
    let isLoggedIn:Boolean = true
   if (isLoggedIn) {
     return 
   }
   return navigateTo('/user/login')
 })