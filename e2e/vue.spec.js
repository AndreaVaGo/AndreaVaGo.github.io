import { test, expect } from '@playwright/test'

test('shows the hero title on the home page', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('h1')).toContainText('Full Stack')
})

test('switches the page to english', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'EN' }).click()

  await expect(page.getByRole('link', { name: 'Hop on the train' })).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
})

test('scrolls to the about section from the menu', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Sobre mí' }).click()

  await expect(page.getByRole('heading', { level: 2, name: /Mi billete/ })).toBeInViewport()
  await expect(page.getByRole('article', { name: 'Mi billete de metro' })).toBeVisible()
})

test('takes you to the journey map from the hero button', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Subir al tren' }).click()

  await expect(page.getByRole('heading', { level: 2, name: 'Plano del bootcamp' })).toBeInViewport()
  await expect(page.getByRole('heading', { level: 3, name: 'Línea Backend' })).toBeVisible()
})
