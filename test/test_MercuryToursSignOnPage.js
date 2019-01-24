var SignOn = require('../POM/Pages/MercuryToursSignOnPage.js');
var sign_on = new SignOn();
var driver = sign_on.driver;
	
describe('Sign On Page form', function() {
	this.timeout(10000);
	
	after(async function() {
		await driver.quit();
		console.log('Finally!');
	});
	
	it('Set information', async function() {
		this.retries(2);
		try {
			await sign_on.get_sign_on_page();
			await sign_on.set_user_name();
			await sign_on.set_password();
			await sign_on.click_submit();
		} finally {
			console.log('Ok!');
		}
	});
});