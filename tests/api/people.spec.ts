import { test, expect } from '@playwright/test'

const SWAPI_URL = 'https://swapi.tech/api'

test('get a person by id', async ({ request }) => {
  const response = await request.get(`${SWAPI_URL}/people/1`)
  expect(response.ok()).toBeTruthy()

  const body = await response.json()
  expect(body.result.properties.name).toBe('Luke Skywalker')
})
