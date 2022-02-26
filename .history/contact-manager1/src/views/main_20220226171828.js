import Vue from "vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";



Vue.use(Buefy);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })