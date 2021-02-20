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
//InputEXT
import InputText from 'primevue/inputtext';
//field
import Fieldset from 'primevue/fieldset';

const app = createApp(App);
app.use(router)
app.use(PrimeVue);
app.use(store)
app.component('Button',Button)
app.component('Navbar', Menubar);
app.component('Input',InputText)
app.component('Field',Fieldset)
app.mount('#app')
