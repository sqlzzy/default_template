// Test import of styles
import './less/main.less';

import Vue from 'vue';
import App from './components/index.vue';

new Vue({
    el: '#app',
    render: h => h(App)
});