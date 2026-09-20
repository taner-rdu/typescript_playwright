import { test, expect } from '@playwright/test'

test('home page loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API')
})
