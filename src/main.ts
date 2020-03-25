import Vue from "vue";
import App from "./App.vue";

import { errorPlugin } from "./plugins/error";

Vue.config.productionTip = false;

Vue.use(errorPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
