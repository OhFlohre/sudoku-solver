import ISolver from "../ISolver"
import { cloneDeep } from "lodash"
import * as O from "fp-ts/lib/Option"

export default class BacktrackingSolver implements ISolver {
    solve(puzzle: number[][]): O.Option<number[][]> {
        let puzzleCopy = cloneDeep(puzzle)
        if (this.doSolve(puzzleCopy)) return O.some(puzzleCopy)
        return O.none
    }

    private doSolve(puzzle: number[][]) {
        for (let y = 0; y < puzzle.length; y++) {
            for (let x = 0; x < puzzle[y].length; x++) {
                if (puzzle[y][x] === 0) {
                    let row = puzzle[y]
                    let col = puzzle.map(row => row[x])
                    let box = this.getBox(puzzle, x, y)

                    for (let i = 1; i <= 9; i++) {
                        if (!(row.includes(i) || col.includes(i) || box.includes(i))) {
                            puzzle[y][x] = i
                            if (this.doSolve(puzzle)) return true
                            puzzle[y][x] = 0
                        }
                    }
                    return false
                }
            }
        }
        return true
    }

    private getBox(puzzle: number[][], x: number, y: number) {
        let dx = Math.floor(x / 3) * 3
        let dy = Math.floor(y / 3) * 3

        return puzzle.slice(dy, dy + 3).map(row => row.slice(dx, dx + 3)).flat()
    }
}