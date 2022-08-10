export type EntityRenderTemplate = (options: HolyOptions, offset?: number) => string
export type HolyOptionsInput = {
  el: Element | string,
  rate: number | string,
  size?: number,
  primaryColor?: string,
  secondColor?: string,
}

export type HolyOptions = {
  el: Element,
  rate: number,
  size?: number,
  primaryColor?: string,
  secondColor?: string,
}
