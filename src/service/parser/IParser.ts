import * as O from "fp-ts/lib/Option"

export default interface IParser {
    parse: (puzzle: string) => O.Option<number[][]>
    validate: (puzzle: string) => boolean
}