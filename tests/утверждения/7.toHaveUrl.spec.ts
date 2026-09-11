import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://osstep.github.io/assertion_tohaveurl');
});

test('1. Проверка изменения URL при навигации', async ({ page }) => {
  const linkAboutUsButton = page.locator('#about-link');
  const linkContactButton = page.locator('#contacts-link');
  const linkGeneralButton = page.locator('#home-link');

  await linkAboutUsButton.click();
  await expect(page).toHaveURL(/.*#about$/);

  await linkContactButton.click();
  await expect(page).toHaveURL(/.*#contacts$/);

  await linkGeneralButton.click();
  await expect(page).toHaveURL(/.*#home/);
});

test('2. Проверка URL при программной навигации', async ({ page }) => {
  // Задание: Проверить URL после программного перехода
  // 1. Нажать кнопку "Перейти в раздел"
  // 2. Проверить что URL изменился на "#contacts"
  // 3. Нажать кнопку "Вернуться назад" (back() в истории)
  // 4. Проверить что URL вернулся к "#home"
});

test('3. Проверка URL после ручного ввода', async ({ page }) => {
  const linkAboutUsButton = page.locator('#about-link');

  await page.goto('https://osstep.github.io/assertion_tohaveurl#about');
  await expect(linkAboutUsButton).toBeVisible();
  await expect(page).toHaveURL(/.*#about$/);

  await page.reload();
  await expect(page).toHaveURL(/.*#about$/);
});
