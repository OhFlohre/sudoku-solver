import { Request, Response } from "express"


class SolveController {


    async get(req: Request, res: Response) {
        const validationRegex = /^\d{9}(_\d{9}){8}$/
        let isValid = validationRegex.test(req.params.puzzle)

        res.json(isValid)
    }

}

export default SolveController