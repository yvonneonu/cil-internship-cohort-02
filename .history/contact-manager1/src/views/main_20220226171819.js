import Vue from "vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
Vue.use(Buefy);
