import {HolyOptions, HolyOptionsInput} from '@src/types'
import {defaultOptions} from '@src/utilities'
import {HolyRender} from '@src/render'
import {defaultUniversalRender} from '@src/render/holy-render'

export class HolyStars {
  public options!: HolyOptions
  constructor (
    private optionsInput: HolyOptionsInput,
    private render: HolyRender = defaultUniversalRender
  ) {
    if (!optionsInput.el) {
      throw new Error(`Element is ${optionsInput.el}`)
    }
    if (typeof optionsInput.el === 'string') {
      if (document) {
        const target = document.querySelector(optionsInput.el) as Element
        if (target !== null) {
          optionsInput.el = target
        } else {
          throw new Error(`Element ${optionsInput.el} not found on page`)
        }
      } else {
        throw new Error(`document not found, cannot find element: ${optionsInput.el}`)
      }
    }

    if (typeof optionsInput.rate === 'string') {
      const target = parseFloat(optionsInput.rate)

      if (!isNaN(target)) {
        optionsInput.rate = target
      } else {
        throw new Error(`Value ${optionsInput.rate} for rating not supported`)
      }
    }

    this.options = Object.assign({}, defaultOptions(), optionsInput, {
      el: optionsInput.el as Element,
      rate: optionsInput.rate as number,
    })
    this.render.mount(this.options)
  }

  update (options?: Partial<HolyOptions>) {
    if (options) {
      this.options = Object.assign({}, this.options, options)
    }
    this.render.mount(this.options)
  }
}

