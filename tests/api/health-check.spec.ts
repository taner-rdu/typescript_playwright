import { test, expect } from '@playwright/test'

test('notes api health check', async ({ request }) => {
  const response = await request.get('/notes/api/health-check')
  expect(response.ok()).toBeTruthy()

  const body = await response.json()
  expect(body).toEqual({
    success: true,
    status: 200,
    message: 'Notes API is Running',
  })
})

test('echo returns a greeting', async ({ request }) => {
  const payload = {
    name: 'Tawfik',
  }

  const response = await request.post('/api/echo', {
    data: payload,
  })
  expect(response.status()).toBe(200)

  const body = await response.json()
  expect(body).toEqual({ message: `Hi ${payload.name}` })
})
