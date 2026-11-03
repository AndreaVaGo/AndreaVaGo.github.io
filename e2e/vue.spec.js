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

test('shows the featured projects from the menu', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Proyectos' }).click()

  await expect(page.getByRole('heading', { level: 2, name: 'Paradas destacadas' })).toBeInViewport()
  await expect(page.getByRole('heading', { level: 3, name: 'Acompáñame' })).toBeVisible()
  await expect(
    page.getByRole('img', { name: 'Captura de pantalla de la app Acompáñame' }),
  ).toBeVisible()
})

test('shows the contact links from the menu', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Contacto' }).click()

  await expect(page.getByRole('heading', { level: 2, name: /Tu empresa/ })).toBeInViewport()
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/andrea-vallina-gonzalez/',
  )
})
