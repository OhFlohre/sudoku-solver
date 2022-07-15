import O from "fp-ts/lib/Option"

export default interface ISolver {
    solve: (puzzle: number[][]) => O.Option<number[][]>
}