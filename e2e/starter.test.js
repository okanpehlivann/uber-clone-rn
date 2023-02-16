import {
  expectToBeVisible,
  isButtonDisable,
  writeTextToInput,
  tapButton,
  getInputText,
} from './detoxHelper';

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

    it('should display email and password input fields', async () => {
      await expectToBeVisible('email-input');
      await expectToBeVisible('password-input');

      await isButtonDisable('login-button');
    });

    it('should login button disabled when email and password are not entered', async () => {
      const emailValue = getInputText('email-input');
      const passwordValue = getInputText('password-input');

      if (!emailValue || !passwordValue) {
        await isButtonDisable('login-button');
      }
    });

    it('should login button disabled when invalid email is entered', async () => {
      await writeTextToInput('email-input', 'invalid-email');
      await writeTextToInput('password-input', 'valid_password');

      await isButtonDisable('login-button');
    });

    it('should login button disabled when invalid password is entered', async () => {
      await writeTextToInput('email-input', 'valid_email@example.com');
      await writeTextToInput('password-input', 'v');

      await isButtonDisable('login-button');
    });
  });

  describe('Home Screen TESTS', () => {
    it('should navigate to home screen when valid email and password are entered', async () => {
      await writeTextToInput('email-input', 'valid_email@example.com');
      await writeTextToInput('password-input', 'valid_password');

      await tapButton('login-button');

      await expectToBeVisible('home-view');
      await expectToBeVisible('home-uber-image');
    });
  });
});
