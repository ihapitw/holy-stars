import {HolyOptions} from '@src/types'
import {defaultOptions} from '@src/utilities'
import {HolyRender} from '@src/render'
import {defaultUniversalRender} from '@src/render/holy-render'

export class HolyStars {
  constructor (
    protected options: HolyOptions,
    protected render: HolyRender = defaultUniversalRender
  ) {
    this.options = Object.assign(defaultOptions(), options)
    this.render.mount(this.options)
  }

  update (options?: Partial<HolyOptions>) {
    if (this.options) {
      this.options = Object.assign({}, this.options, options)
    }
    this.render.mount(this.options)
  }
}

