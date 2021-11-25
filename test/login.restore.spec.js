// spec.js
describe('Onliner login purchase logout', function () {
  
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 1080);
  browser.driver.manage().timeouts().implicitlyWait(20000);
  browser.waitForAngularEnabled(false);
  it('Should proceed to the https://www.onliner.by page', () => {
    
    browser.get('https://www.indiegogo.com', 10000);
    element(by.css('.layoutHeader-logIn')).click();
    element(by.css('.CybotCookiebotDialogBodyContentLabelPersonalInformation')).click();
    element(by.id('CybotCookiebotDialogBodyButtonAccept')).click();
    element(by.id('email')).sendKeys('ffnapp@ya.ru');
    element(by.id('password')).sendKeys('!1ffnApp');
    element(by.xpath('//*[@id="vueHomepage"]/div[1]/div[3]/div/div[1]/div[2]/div/form/div[3]/button')).click();
    element(by.xpath('//*[@id="navigationHeader"]/div/div[2]/nav/div/div[2]/div/div[4]/a/span')).click();
    element(by.xpath('//*[@id="navigationHeader"]/div/div[2]/nav/div/div[2]/div/div[5]/a[5]')).click();
    element(by.css('.layoutHeader-logIn')).click();
    element(by.linkText('Forgot your password?')).click();
    element(by.name('account[email]')).sendKeys('ffnapp@ya.ru');
    element(by.name('commit')).click();
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[3]')).sendKeys('ffnapp@ya.ru');
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[4]')).sendKeys('!1ffnApp');
    element(by.xpath('/html/body/div[2]/div/div/div[3]/div/div/div[3]/form/input[5]')).click();
  });
});