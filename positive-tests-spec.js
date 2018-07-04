describe('Login negative test', function() {

    beforeEach(function () {
        console.log(' beforeEach');
        browser.ignoreSynchronization = true;
        browser.driver.manage().deleteAllCookies();
    });


    var searchBox = element(by.id('searchBox'));
	var searchButton = element.all(by.css('js-searchButton')).first();
	var secondItem = element.all(by.css('.srp-item-address')).get(1);
	var secondItemPrice = element.all(by.css('.srp-item-price')).get(1);

	it('Open Realtor website', function () {

		browser.get
        ('https://www.realtor.com/');
        // browser.manage().addCookie('test', 'test', '/', 'realtor');

    });

    it('Search on page', function () {

        browser.findElement(By.id('searchBox')).sendKeys("Morgantown, WV");
        var search = element(by.id('clearInput'));
        search.sendKeys(protractor.Key.TAB);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(3000); // 3s to take a look ;)


		expect(element(by.className('search-result-count')).getText()).not.toBeLessThan('1');
		secondItem.click();
    	browser.sleep(9000);

        var someElement = element(by.css('[itemprop="price"]'));

        it('some description', (done) => {
            someElement.getText().then(function(text){
                var splittedText = text.split(" ");
                expect(splittedText).toEqual('$228,900');
            }).finally(done);
        });

    });
});