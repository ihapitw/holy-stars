import {EntityRenderTemplate, HolyOptions} from '@src/types'
import {defaultEntityRender} from '@src/utilities'

export class HolyRender {
  constructor (protected entityTemplate: EntityRenderTemplate = defaultEntityRender) {
  }

  mount (options: HolyOptions) {
    const {el} = options
    let {rate} = options
    let last = rate - Math.floor(rate)
    rate = Math.floor(rate)
    let starsTemplate = ''

    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        starsTemplate += this.entityTemplate(options)
      } else if (last) {
        starsTemplate += this.entityTemplate(options, last)
        last = 0
      } else {
        starsTemplate += this.entityTemplate(options, 0)
      }
    }

    el.innerHTML = `<div class="holy-stars">${starsTemplate}</div>`
  }
}

export const defaultUniversalRender = new HolyRender()
