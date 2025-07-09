import { test, expect, chromium, Page, Locator } from '@playwright/test';

test('Phone number not number', async ({ page }) => {
    const testdata = JSON.parse(JSON.stringify(require("../testdata/invalidphone.json")))
    await page.goto('https://qa-practice.netlify.app/bugs-form');
    //Locators
    const fname: Locator = await page.locator('#firstName');
    const lname: Locator = await page.locator('#lastName');
    const phone: Locator = await page.locator('#phone');
    const email = await page.locator('#emailAddress');
    const pwd = await page.locator('#password');
    const regbtn = await page.locator('#registerBtn')
    //Tests
    await fname.fill(testdata.firstname);
    await lname.fill(testdata.lastname);
    await phone.fill(testdata.phonenumber);
    await email.fill(testdata.Emailaddress);
    await pwd.fill(testdata.Password);
    await regbtn.click();
    const message = await page.locator('#message');
    // This test will fail because no number validation
    await expect(message).toHaveText(/phone/);
});

test('Email addresss in wrong format', async ({ }) => {
    const testdata = JSON.parse(JSON.stringify(require("../testdata/invalidemail.json")))
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://qa-practice.netlify.app/bugs-form');
    //Locators
    const fname: Locator = await page.locator('#firstName');
    const lname: Locator = await page.locator('#lastName');
    const phone: Locator = await page.locator('#phone');
    const email = await page.locator('#emailAddress');
    const pwd = await page.locator('#password');
    const regbtn = await page.locator('#registerBtn')
    //Tests

    await fname.fill(testdata.firstname);
    await lname.fill(testdata.lastname);
    await phone.fill(testdata.phonenumber);

    await email.fill(testdata.Emailaddress);
    await pwd.fill(testdata.Password);
    await regbtn.click();
    const message = await page.locator('#message');
    await expect(message).toHaveText(/email/);
});



test('Password should be masked', async ({ page }) => {
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
    await expect(pwd).toHaveAttribute('type', 'password');

    await regbtn.click();
    const message = await page.locator('#message');
    await expect(message).toHaveText(/password/);
});