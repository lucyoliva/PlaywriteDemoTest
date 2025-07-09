
import { test, expect, Browser, Page, Locator } from '@playwright/test';

test('Last name missing', async ({ page }) => {
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

    await fname.fill(testdata.firstname);
    await phone.fill(testdata.phonenumber);
    await email.fill(testdata.Emailaddress);
    await pwd.fill(testdata.Password);
    await regbtn.click();
    const message = await page.locator('#message');
    // This test will fail because of the bug: Able to register even Last Name is Missing
    await expect(message).toHaveText(/Last Name/);
});

test('Phone number missing', async ({ page }) => {
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
    await fname.fill(testdata.firstname);
    await lname.fill(testdata.lastname);
    await email.fill(testdata.Emailaddress);
    await pwd.fill(testdata.Password);
    await regbtn.click();
    const message = await page.locator('#message');
    await expect(message).toHaveText(/phone number/);
});

test('Email address missing', async ({ page }) => {
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
    await fname.fill(testdata.firstname);
    await lname.fill(testdata.lastname);
    await phone.fill(testdata.phonenumber);
    await pwd.fill(testdata.Password);
    await regbtn.click();
    const message = await page.locator('#message');
    // This test will fail because of the bug: Able to register even Email is Missing
    await expect(message).toHaveText(/Email/);
});

test('Password missing', async ({ page }) => {
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
    await fname.fill(testdata.firstname);
    await lname.fill(testdata.lastname);
    await phone.fill(testdata.phonenumber);
    await email.fill(testdata.Emailaddress);
    await regbtn.click();
    const message = await page.locator('#message');
    await expect(message).toHaveText(/password/);
});