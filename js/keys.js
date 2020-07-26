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
  computed:{
    numberKeys() {
      if (this.foundkeys<0) return 0;
      if (this.foundkeys>3) return 3;
      return this.foundkeys;
    }
  },
  template: `
  <div>
<!--  <span>Зібрано ключів: {{foundkeys}} </span>-->
    <img  :src="urlKey[numberKeys]" height="100px" width="200px"> 
  </div>
<!--  <img -->
<!--    v-for="i in 3" -->
<!--    :src="foundkeys === i ? urlKey[i] : urlKey[0]">-->
<!--  </div>-->
  `
})
