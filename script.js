Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    llamaFacts:[
      {id: 0, text: 'Llamas are vegetarians and have very efficient digestive systems.'},
      {id: 1, text: 'Llamas do not bite. '},
      {id: 2, text: 'Llamas are smart and easy to train.'},
      {id: 3, text: 'A group of llamas is called a herd.'},
      {id: 4, text: 'Llamas live to be about 20 years old.  '},
      {id: 5, text: 'Llamas are members of the camelid family meaning they are pretty closely related to vicuñas and camels.'},
      {id: 6, text: 'Camelids first appeared on the Central Plains of North America about 40 million years ago. '},
      {id: 7, text: 'If you try to overload a llama with too much weight, the llama is likely to lie down or simply refuse to move.'},
      {id: 8, text: 'Llamas are hardy and well suited to harsh environments. '},
      {id: 9, text: 'They are quite sure-footed, easily navigating rocky terrain at high altitudes.'},
      ]
  }
})

var app2 = new Vue({
  el: '#app2',
  data:{
    message: "Additional Llama fact",
    llamaFact: true
  }
});
