# Holy Stars
### Simple rate widget
```javascript
import 'holy-stars/index.css'
import { HolyStars } from 'holy-stars'

const stars = new HolyStars({
  el: document.getElementById('stars'),
  rate: 4.4,
  size: 16,
  primaryColor: '#FFE135',
  secondColor: '#ddd',
})

stars.update({
  rate: 4,
  size: 24,
})
```

### Custom entry template
```javascript
import { HolyStars, HolyRender } from 'holy-stars'

const renderTemplate = ({size = 12, primaryColor, secondColor}, offset = 1) => {
  return `
      <div class="holy-stars__entity" style="width: ${size}px; height: ${size}px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${24 * offset} 24" width="${size * offset}" height="${size}">
          <path fill="${primaryColor}" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">
          <path fill="${secondColor}" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>
      </div>`
}
const render = new HolyStars(renderTemplate)

const stars1 = new HolyStars({
  el: document.getElementById('stars1'),
  rate: 4.4,
  size: 16,
  primaryColor: '#FFE135',
  secondColor: '#ddd',
}, render)

const stars2 = new HolyStars({
  el: document.getElementById('stars2'),
  rate: 4.4,
  size: 16,
  primaryColor: '#FFE135',
  secondColor: '#ddd',
}, render)
```
