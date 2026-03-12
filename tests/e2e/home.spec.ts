import { expect, test } from "@playwright/test";

test("homepage renders the main portfolio sections", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /fabian galan/i,
    }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: /explore selected work/i })).toBeVisible();
  await expect(page.getByText(/^Selected work$/i)).toBeVisible();
  await expect(page.getByText(/^contact$/i)).toBeVisible();
});
