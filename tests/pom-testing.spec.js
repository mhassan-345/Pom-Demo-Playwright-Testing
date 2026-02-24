import { test, expect } from "@playwright/test";

test("login-testing", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.pause();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("admin");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin1234");
  await page.getByRole("button", { name: " Login" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("SuperSecretPassword!");
  await page.getByRole("button", { name: " Login" }).click();
  await page.getByRole("link", { name: "Logout" }).click();
});
