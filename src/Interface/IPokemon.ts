export interface IPokemon<T> {
    id: number
    name: string
    sprites: string
    types: T[]
    height: number
    weight: number
}