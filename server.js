import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'

import { loggerService } from './services/logger.service.js'

const app = express()

const corsOptions = {
	origin: ['http://127.0.0.1:5173', 'http://127.0.0.1:3000', 'http://localhost:5173', 'http://localhost:3000'],
	credentials: true,
}
// Express Config:
app.use(express.static('public'))
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.json())

import { codeblockRoutes } from './api/codeblocks/codeblock.routes.js'
app.use('/api/codeblock', codeblockRoutes)

app.get('/api/logs', async (req, res) => {
	res.sendFile(process.cwd() + '/logs/backend.log')
})

// Express Routing:
app.get('/', (req, res) => {
	console.log('Got a request!')
	res.send('Hello And Welcome')
})

app.get('/**', (req, res) => {
	res.sendFile(path.resolve('public/index.html'))
})

const port = process.env.PORT || 3030
app.listen(port, () => loggerService.info(`Server listening on port http://127.0.0.1:${port}/`))
