import { Router } from "express"

import SolveController from "@/controller/solve-controller"
import { Parser, Solver } from "@/service"

const router = Router()
const solveController = new SolveController()

router.get("/solve/:puzzle", (req, res) => solveController.get(req, res))

export default router