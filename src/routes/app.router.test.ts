import request from 'supertest'
import { app } from '../main'

describe('App router test', () => {
  describe('Healthcheck endpoint', () => {
    test('GET Healthcheck', async () => {
      const response =
        await request(app).get('/healthz')

      expect(response.statusCode).toBe(200)
    })
  })
})
