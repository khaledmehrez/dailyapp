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
import 'primeflex/primeflex.css';
//button
import Button from 'primevue/button';
//navbar
import Menubar from 'primevue/menubar';
//InputEXT
import InputText from 'primevue/inputtext';
//field
import Fieldset from 'primevue/fieldset';
//loader
import ProgressSpinner from 'primevue/progressspinner';
//messageError
import Message from 'primevue/message';
//toolbar
import Toolbar from 'primevue/toolbar';
const app = createApp(App);
app.use(router)
app.use(PrimeVue);
app.use(store)
app.component('Button',Button)
app.component('Navbar', Menubar);
app.component('Input',InputText)
app.component('Field',Fieldset)
app.component('Spinner',ProgressSpinner)
app.component('MessageError',Message)
app.component('ToolBar',Toolbar)
app.mount('#app')
