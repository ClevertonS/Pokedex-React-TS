export interface IPaginacaoPokemons<T> {
    count: number
    next: string
    previous: string
    results: T[]
}