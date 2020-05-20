import { DEFAULT_OPTIONS } from './modules/constants'
import { HolyRender } from './modules/holy-render'

export default class HolyStars {
  constructor(options) {
    this.options = { ...DEFAULT_OPTIONS, ...options }

    if (this.options.el instanceof HTMLElement) {
      this.el = this.options.el
    } else {
      throw new Error(`Option 'el' should be HTMLElement`)
    }

    if (this.options.rate === null) {
      throw new Error(`Option 'rate' required`)
    } else {
      const rate = parseFloat(this.options.rate)
      if (typeof rate === 'number' && !isNaN(rate)) {
        this.rate = rate
      } else {
        throw new Error(`Option 'rate' should be correct number`)
      }
    }

    if (!isNaN(+this.options.size)) {
      this.size = +this.options.size
    } else {
      throw new Error(`Option 'size' should be correct number`)
    }

    this.colors = {
      primaryColor: this.options.primaryColor,
      secondColor: this.options.secondColor
    }

    this.render = new HolyRender()
    this.compute()
  }

  compute() {
    this.render.data = {
      el: this.el,
      colors: this.colors,
      rate: this.rate,
      size: this.size
    }
    this.render.run()
  }

  set value(value) {
    const newRate = parseFloat(value)
    if (typeof newRate === 'number' && !isNaN(newRate)) {
      this.rate = newRate
    } else {
      throw new Error(`rate value should be correct number`)
    }
    this.rate = newRate
    this.compute()
  }
}
