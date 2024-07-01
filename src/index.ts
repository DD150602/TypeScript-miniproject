import express, { json } from 'express'
import router from './routes/routes'

const PORT = process.env.PORT ?? 4321

const app = express()

app.use(json())

app.get('/', (_req, res) => res.json({ message: 'hello world' }))
app.use('/coordinates', router)

app.listen(PORT, () => console.log(`server listening on port http://localhost:${PORT}`))
