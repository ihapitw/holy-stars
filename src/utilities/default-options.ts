import {HolyOptions} from '@src/types'

export const defaultOptions: () => Omit<HolyOptions, 'el'> = () => (
  {
    rate: 5,
    size: 16,
    primaryColor: '#FFE135',
    secondColor: '#ddd',
  }
)
