import { expect, test } from "@playwright/test";

test("homepage renders the main portfolio sections", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /fabian galan/i,
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /explorar proyectos|explore projects/i }),
  ).toBeVisible();
  await expect(page.getByText(/^trabajo seleccionado$|^selected work$/i)).toBeVisible();
  await expect(page.getByText(/^contacto$|^contact$/i)).toBeVisible();
});
