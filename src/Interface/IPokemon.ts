export interface IPokemon<T> {
    id: number
    name: string
    types: T[]
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }
    height: number
    weight: number
}