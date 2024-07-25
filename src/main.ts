import express from 'express'
import { appRouter } from './routes/app.router'
import { someRouter } from './routes/some.router'

export const app = express()

app.use('/', appRouter)
app.use('/some', someRouter)

if (process.env.NODE_ENV !== 'test')
  app.listen(8080, () => {
    console.log('Server is now on http://localhost:8080')
  })
