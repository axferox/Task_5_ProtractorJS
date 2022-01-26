describe('Login and restore password. ', function () {

  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 1080);
  browser.driver.manage().timeouts().implicitlyWait(20000);

  it('Should proceed to the https://www.indiegogo.com page', () => {
    browser.get('https://www.indiegogo.com');
    expect(browser.getTitle()).toEqual('Crowdfund Innovations & Support Entrepreneurs | Indiegogo');

  });

  it('Should test that cookie consent checkbox are present and un ticked by default', () => {
    const checkbox = 'CybotCookiebotDialogBodyContentCheckboxPersonalInformation'
    const checkboxLabel = '.CybotCookiebotDialogBodyContentLabelPersonalInformation'
    expect(element(by.id(checkbox)).isSelected().false);
    browser.wait(ExpectedConditions.elementToBeClickable(element(by.css(checkboxLabel))),10000)
    element(by.css(checkboxLabel)).click();
    expect(element(by.id(checkbox)).isSelected().true);
  });

  it('Should test that cookie consent can be submitted', () => {
    const acceptButton = 'CybotCookiebotDialogBodyButtonAccept'
    const cookieDialog = 'CybotCookiebotDialog'
    element(by.id(acceptButton)).click();
    expect(element(by.name(cookieDialog)).isPresent().false);
  });

  it('Should test that login button is present and can be ticked', () => {
    expect(element(by.css('.layoutHeader-logIn')).getText()).toEqual('Log In');
    element(by.css('.layoutHeader-logIn')).click();
  });

  it('Should test that user can complete and submit the login form', () => {
    expect(element(by.xpath('//*[@id="vueHomepage"]/div[1]/div[3]/div/div[1]')).isPresent().true);
    element(by.id('email')).sendKeys('ffnapp@ya.ru');
    element(by.id('password')).sendKeys('!1ffnApp');
    element(by.xpath('//*[@id="vueHomepage"]/div[1]/div[2]/div/div[1]/div[2]/div/form/div[3]/button')).click();

  });

  it('Should test that user logged in an user name is shown in the top right corner of the screen', () => {
    expect(element(by.xpath('//*[@id="vueHomepage"]/div[1]/div[3]/div/div[1]')).isPresent().false);
    expect(element(by.xpath('//*[@id="iggAppLayout"]/div/div/div[1]/div/nav/div/div[2]/div/div[4]/a/span')).getText()).toEqual('ffnapp');
  });

  it('Should test that user can perform the log out', () => {
    element(by.xpath('//*[@id="iggAppLayout"]/div/div/div[1]/div/nav/div/div[2]/div/div[4]/a/span')).click();
    element(by.xpath('//*[@id="iggAppLayout"]/div/div/div[1]/div/nav/div/div[2]/div/div[5]/a[5]')).click();
    expect(element(by.xpath('//*[@id="iggAppLayout"]/div/div/div[1]/div/nav/div/div[2]/div/div[4]/a/span')).isPresent().false);
  });

  it('Should test that restore password link is present and user can proceed to the restore password form', () => {
    element(by.css('.layoutHeader-logIn')).click();
    element(by.linkText('Forgot your password?')).click();
    element(by.name('account[email]')).sendKeys('ffnapp@ya.ru');
    element(by.name('commit')).click();
  });

  it('Should test that user can perform the login from the second login form', () => {
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[3]')).sendKeys('ffnapp@ya.ru');
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[4]')).sendKeys('!1ffnApp');
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[5]')).click();
    expect(element(by.xpath('//*[@id="iggAppLayout"]/div/div/div[1]/div/nav/div/div[2]/div/div[4]/a/span')).getText()).toEqual('ffnapp');
  });
});