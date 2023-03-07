import express from 'express'
import operacionesRoutes from './routes/operaciones.js'

const app = express()

app.use('/operaciones', operacionesRoutes)

app.listen(8080, () => console.log('Server Up'))