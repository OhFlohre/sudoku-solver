import express from "express"
import router from "@/routes/routes"


const PORT = process.env.PORT || 8080

const app = express()

app.use(router)

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))