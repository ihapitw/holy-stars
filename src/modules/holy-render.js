function template({ offset = 1, colors, size = 24 }) {
  return `
    <div class="holy-stars__entity" style="width: ${size}px; height: ${size}px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${
        24 * offset
      } 24" width="${size * offset}" height="${size}">
        <path fill="${
          colors.primaryColor
        }" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">
        <path fill="${
          colors.secondColor
        }" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
    </div>`
}

export class HolyRender {
  constructor() {
    this._data = {
      el: null,
      colors: null,
      rate: null,
      size: null
    }
  }
  set data(data) {
    this._data = data
  }
  run() {
    const data = this._data
    let rate = data.rate
    let last = rate - Math.floor(rate)
    rate = Math.floor(rate)
    let starsTemplate = ''
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        starsTemplate += template({ colors: data.colors, size: data.size })
      } else if (last) {
        starsTemplate += template({
          offset: last,
          colors: data.colors,
          size: data.size
        })
        last = false
      } else {
        starsTemplate += template({
          offset: 0,
          colors: data.colors,
          size: data.size
        })
      }
    }
    const container = document.createElement('div')
    container.classList.add('holy-stars')
    container.innerHTML = starsTemplate
    while (data.el.firstChild) data.el.removeChild(data.el.firstChild)
    data.el.appendChild(container)
  }
}
