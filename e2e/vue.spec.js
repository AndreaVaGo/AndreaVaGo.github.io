import { test, expect } from '@playwright/test'

test('shows the portfolio owner name on the home page', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('h1')).toHaveText('Andrea Vallina')
})
