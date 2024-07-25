import request from "supertest"
import { app } from "../main"

describe('Some router test', () => {
  describe('Success endpoint', () => {
    test('GET Success', async () => {
      const response =
        await request(app).get('/some/success')

      expect(response.body.success).toBe(true)
    })
  })

  describe('Fail endpoint', () => {
    test('GET Fail', async () => {
      const response =
        await request(app).get('/some/fail')

      expect(response.body.success).toBe(true)
    })
  })
})
