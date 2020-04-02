import { HolyStars } from './index'

const stars = new HolyStars({
  el: document.getElementById('stars'), // required option, only HTMLElement
  rate: 4.4, // required option

  // non-required option
  size: 72, // width and height single star in px
  primaryColor: '#FFE135', // active star color
  secondColor: '#ddd' // second star color
})

stars.value = 2.5 // change rate
