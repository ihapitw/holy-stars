export type EntityRenderTemplate = (options: HolyOptions, offset?: number) => string
export type HolyOptions = {
    el: HTMLElement,
    rate: number,
    size?: number,
    primaryColor?: string,
    secondColor?: string,
}
