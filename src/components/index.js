import Input from './Input/input.vue'

const components = {
   install(Vue){
       Vue.component('mingInput',Input) //name名很重要，最后引用的组件名
   } 
}

/* 支持使用标签的方式引入 */
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(components);
}
export default components;