import { createApp } from "vue";
import App from "./App.vue";
import "/public/main.css";
import "vuetify/dist/vuetify.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";
import store from "./store/index";


// Vuetify

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).use(store).mount("#app");
