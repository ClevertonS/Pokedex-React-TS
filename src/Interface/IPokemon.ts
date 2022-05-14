export interface IPokemon<T> {
    id: number
    name: string
    types: T[]
    height: number
    weight: number
}