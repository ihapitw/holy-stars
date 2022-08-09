import {EntityRenderTemplate, HolyOptions} from '@src/types'

export const defaultEntityRender: EntityRenderTemplate = ({size = 12, primaryColor, secondColor}: HolyOptions, offset= 1,) => {
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
