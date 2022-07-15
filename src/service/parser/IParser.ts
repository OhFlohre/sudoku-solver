export default interface IParser {
    parse: (puzzle: string) => number[][]
    validate: (puzzle: string) => boolean
}