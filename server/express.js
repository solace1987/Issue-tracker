import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import incidentRoutes from './routes/incident.routes'
import requestRoutes from './routes/request.routes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
<<<<<<< HEAD
app.use(cors())
=======
app.use(cors(
    {
        origin:'https://gppictissuetracker.netlify.app',
        optionsSuccessStatus: 200,
        credentials : true
        }
))
>>>>>>> c2609d4168d2efe0af4f876531e8f362855eae8d

app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', incidentRoutes)
app.use('/', requestRoutes)


export default app
