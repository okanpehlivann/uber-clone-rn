describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen view', async () => {
    await expect(element(by.id('home-view'))).toBeVisible();
  });

  it('should have home screen uber logo', async () => {
    await expect(element(by.id('home-uber-image'))).toBeVisible();
  });
});
