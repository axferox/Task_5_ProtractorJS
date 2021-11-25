// spec.js
describe('Login and restore password. ', function () {

  browser.ignoreSynchronization = true;
  // browser.driver.manage().window().setSize(1920, 1080);
  browser.driver.manage().timeouts().implicitlyWait(20000);
  browser.waitForAngularEnabled(false);
  it('Should proceed to the https://www.indiegogo.com page', () => {
    browser.get('https://www.indiegogo.com');
    expect(browser.getTitle()).toEqual('Crowdfund Innovations & Support Entrepreneurs | Indiegogo');

  });

  it('Should test that cookie consent checkbox are present and unticked by default', () => {
    expect(element(by.id('CybotCookiebotDialogBodyContentCheckboxPersonalInformation')).isSelected().false);
    element(by.css('.CybotCookiebotDialogBodyContentLabelPersonalInformation')).click();
    expect(element(by.id('CybotCookiebotDialogBodyContentCheckboxPersonalInformation')).isSelected().true);
  });

  it('Should test that cookie consent can be submitted', () => {
    element(by.id('CybotCookiebotDialogBodyButtonAccept')).click();
    expect(element(by.name('CybotCookiebotDialog')).isPresent().false);
  });

  it('Should test that login button is present and can be ticked', () => {
    expect(element(by.css('.layoutHeader-logIn')).getText()).toEqual('Log In');
    element(by.css('.layoutHeader-logIn')).click();
  });

  it('Should test that user can complete and submit the login form', () => {
    expect(element(by.xpath('//*[@id="vueHomepage"]/div[1]/div[3]/div/div[1]')).isPresent().true);
    element(by.id('email')).sendKeys('ffnapp@ya.ru');
    element(by.id('password')).sendKeys('!1ffnApp');
    element(by.xpath('//*[@id="vueHomepage"]/div[1]/div[3]/div/div[1]/div[2]/div/form/div[3]/button')).click();
  });

  it('Should test that user logged in an user name is shown in the top right corenr of the screen', () => {
    expect(element(by.xpath('//*[@id="vueHomepage"]/div[1]/div[3]/div/div[1]')).isPresent().false);
    expect(element(by.xpath('//*[@id="navigationHeader"]/div/div[2]/nav/div/div[2]/div/div[4]/a/span')).getText()).toEqual('ffnapp');
  });

  it('Should test that user can perform the log out', () => {
    element(by.xpath('//*[@id="navigationHeader"]/div/div[2]/nav/div/div[2]/div/div[4]/a/span')).click();
    element(by.xpath('//*[@id="navigationHeader"]/div/div[2]/nav/div/div[2]/div/div[5]/a[5]')).click();
    expect(element(by.xpath('//*[@id="navigationHeader"]/div/div[2]/nav/div/div[2]/div/div[4]/a/span')).isPresent().false);
  });

  it('Should test that restore password link is present and user can procceed to the restore password form', () => {
    element(by.css('.layoutHeader-logIn')).click();
    element(by.linkText('Forgot your password?')).click();
    element(by.name('account[email]')).sendKeys('ffnapp@ya.ru');
    element(by.name('commit')).click();
  });

  it('Should test that user can perform the login from the second login form', () => {
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[3]')).sendKeys('ffnapp@ya.ru');
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[4]')).sendKeys('!1ffnApp');
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[5]')).click();
    expect(element(by.xpath('//*[@id="navigationHeader"]/div/div[2]/nav/div/div[2]/div/div[4]/a/span')).getText()).toEqual('ffnapp');
  });
  
});