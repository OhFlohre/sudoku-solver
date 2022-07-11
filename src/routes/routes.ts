import { Router } from "express"

import SolveController from "@/controller/solve-controller"

const router = Router()
const solveController = new SolveController()

router.get("/solve/:puzzle", solveController.get)

export default router