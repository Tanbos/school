Vue.component('keys', {

  props: {
    foundkeys: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      urlKey: ['images/key_no.png', 'images/key1.png', 'images/key2.png', 'images/key.png3']
    }
  },
  template: `
  <div>
  <span>FFFFFFFFFFF HHHHHH </span>
  <img 
    v-for="i in 3"
    :src="foundkeys > 0 ? urlKey[i] : urlKey[0]>
  </div>
  `
})

