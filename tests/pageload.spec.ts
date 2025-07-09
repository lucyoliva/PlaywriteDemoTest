import { test, expect, Browser, Page, Locator } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://qa-practice.netlify.app/bugs-form');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/QA Practice/);
});

test('get started link', async ({ page }) => {
    const testdata = JSON.parse(JSON.stringify(require("../testdata/testdata.json")))

    await page.goto('https://qa-practice.netlify.app/bugs-form');
    //Locators
    const fname: Locator = await page.locator('#firstName');
    const lname: Locator = await page.locator('#lastName');
    const phone: Locator = await page.locator('#phone');
    const email = await page.locator('#emailAddress');
    const pwd = await page.locator('#password');
    const regbtn = await page.locator('#registerBtn')
    //Tests
    // Fill email and password fields
    await fname.fill(testdata.firstname);
    await lname.fill(testdata.lastname);
    await phone.fill(testdata.phonenumber);
    await email.fill(testdata.Emailaddress);
    await pwd.fill(testdata.Password);
    await regbtn.click();
    // This test will fail because of the bug: Welcome page is not loading after successfull registration
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});