var Register = require('../POM/Pages/MercuryToursRegisterPage.js');
var register = new Register();
var driver = register.driver;
	
describe('Register Page form', function() {
	this.timeout(10000);
	
	after(async function() {
		await driver.quit();
		console.log('Finally!');
	});
	
	it('Set information', async function() {
		this.retries(2);
		try {
			await register.get_register_page();
			await register.set_first_name();
			await register.set_last_name();
			await register.set_phone();
			await register.set_email();
			await register.set_country();
			await register.set_user_name();
			await register.set_password();
			await register.set_confirm_password();
			await register.click_submit();
		} finally {
			console.log('Ok!');
		}
	});
});