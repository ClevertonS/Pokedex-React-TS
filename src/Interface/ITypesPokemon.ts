import { colors }  from "../Styles/colors";

export type ColorsType = keyof typeof colors;

export interface ITypesPokemon {
    slot: number
    type: {
        name: ColorsType
    }
}