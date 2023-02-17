import {
  expectToBeVisible,
  isButtonDisable,
  writeTextToInput,
  tapButton,
  getInputText,
} from './detoxHelper';

import {getData} from '../service';

describe('APP TEST STARTED', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  describe('Login Screen TESTS', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });

    it('should display email,password and login button fields', async () => {
      await expect(element(by.id('email-input'))).toBeVisible();
      await expect(element(by.id('password-input'))).toBeVisible();
      await expect(element(by.id('login-button'))).toBeVisible();
    });

    it('should display error when email and password are not entered', async () => {
      await element(by.id('login-button')).tap();

      await expect(
        element(by.id('input-error').and(by.text('Email is required'))),
      ).toBeVisible();

      await expect(
        element(by.id('input-error').and(by.text('Password is required'))),
      ).toBeVisible();
    });

    it('should login button disabled when invalid email is entered', async () => {
      await writeTextToInput('email-input', 'invalid-email');
      await writeTextToInput('password-input', 'valid_password');

      await element(by.id('login-button')).tap();
      await expect(element(by.id('input-error'))).toBeVisible();
    });

    it('should display error when invalid password is entered', async () => {
      await writeTextToInput('email-input', 'valid_email@example.com');
      await writeTextToInput('password-input', 'v');

      await element(by.id('login-button')).tap();
      await expect(element(by.id('input-error'))).toBeVisible();
    });

    it('should navigate to Home Page when valid password and email', async () => {
      await writeTextToInput('email-input', 'valid_email@example.com');
      await writeTextToInput('password-input', 'valid_password');

      await element(by.id('login-button')).tap();
      await expect(element(by.id('home-view'))).toBeVisible();

      await waitFor(element(by.id('last-view')))
        .toExist()
        .withTimeout(2000);
    });
  });
});
