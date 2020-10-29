import { mount } from '@vue/test-utils';
import App from '../components/index.vue';


it('Components test', () => {
    const wrapper = mount(App);
    expect(wrapper.vm).toBeTruthy();
});

const sum = require('../js/common.js');

test('adds 2 + 9 to equal 11', () => {
    expect(sum(2, 9)).toBe(11);
});