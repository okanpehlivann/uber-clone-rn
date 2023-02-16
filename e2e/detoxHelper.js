// Element var mı yok mu kontrolü.
export const expectToBeVisible = async id => {
  try {
    await expect(element(by.id(id))).toBeVisible();
    return true;
  } catch (e) {
    return false;
  }
};

// Input alanına istenilen text'i yazar.
export const writeTextToInput = async (id, text) => {
  try {
    await element(by.id(id)).typeText(text);

    return true;
  } catch (e) {
    return false;
  }
};

// Input alanının değerini alır.
export const getInputText = async id => {
  try {
    const attributes = await element(by.id(id)).getAttributes();
    const value = await attributes.text;

    return value.length === 0 ? false : true;
  } catch (e) {
    return false;
  }
};

// Butonun basılabilir olup olmamasını kontrol eder.
export const isButtonDisable = async id => {
  try {
    await expect(element(by.id(id))).tap();
    return true;
  } catch (e) {
    console.log('Not tappable');
    return false;
  }
};

// Butona Bas
export const tapButton = async id => {
  try {
    await element(by.id(id)).tap();
    return true;
  } catch (e) {
    return false;
  }
};
