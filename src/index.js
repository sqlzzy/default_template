import './js/common.js';
import App from './components/index.vue';
import './css/main.css';
import './less/main.less';


window.Vue = require('vue');

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});