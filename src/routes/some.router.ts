import { Router } from "express";

export const someRouter = Router()

someRouter.get('/success', (req, res) => {
  res.send({
    success: true,
    message: 'this route runs normally'
  })
})

someRouter.get('/fail', (req, res) => {
  if (Math.random() > 0.5)
    throw new Error('this route 50/50 fails')

  res.send({
    success: true
  })
})
