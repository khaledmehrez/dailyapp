import { createApp } from 'vue'
import App from './App.vue'
//routes
import router from './router'
//store
import store from './store'
//primevue
import PrimeVue from 'primevue/config';
//primevue css dependency
import"primevue/resources/themes/saga-blue/theme.css"
import"primevue/resources/primevue.min.css"
import"primeicons/primeicons.css"
//button
import Button from 'primevue/button';
//navbar
import Menubar from 'primevue/menubar';
const app = createApp(App);
app.use(router)
app.use(PrimeVue);
app.use(store)
app.component('Button',Button)
app.component('Navbar', Menubar);
app.mount('#app')
