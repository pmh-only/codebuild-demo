import { Router } from "express";

export const appRouter = Router()

appRouter.get('/healthz', (req, res) => {
  res.send({
    success: true
  })
})
