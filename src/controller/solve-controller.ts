import { Request, Response } from "express"
import * as O from "fp-ts/lib/Option"
import { pipe, flow } from 'fp-ts/function'

import { Solver, Parser } from "@/service"

class SolveController {
    parser = new Parser()
    solver = new Solver()

    async get(req: Request, res: Response) {
        pipe(
            req.params.puzzle,
            (str) => this.parser.parse(str),
            O.match(
                () => { res.status(400).json("invalid input") },
                flow(
                    (puzzle => this.solver.solve(puzzle)),
                    O.match(
                        () => { res.status(400).json("no solution found") },
                        (solution) => res.status(200).json(solution)
                    )
                )
            )
        )
    }
}

export default SolveController