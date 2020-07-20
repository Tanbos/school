Vue.component('keys', {

  props: {
    foundkeys: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      urlKey: ['images/key_no.png', 'images/key1.png', 'images/key2.png', 'images/key3.png']
    }
  },
  template: `
  <div>
  <span>Зібрано ключів: {{foundkeys}} </span>
    <img     :src="urlKey[foundkeys]" height="100px" width="200px"> 
  </div>
<!--  <img -->
<!--    v-for="i in 3" -->
<!--    :src="foundkeys === i ? urlKey[i] : urlKey[0]">-->
<!--  </div>-->
  `
})

