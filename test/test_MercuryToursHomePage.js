var Home = require('../POM/Pages/MercuryToursHomePage.js');
var home = new Home();
var driver = home.driver;
	
describe('Get Mercury Tours Home Page', function() {
	this.timeout(10000);
	
	after(async function() {
		await driver.quit();
		console.log('Finally!');
	});
	
	it('Click on Sign On', async function() {
		this.retries(2);
		try {
			await home.get_home_page();
			await home.click_sign_on();
		} finally {
			console.log('Ok!');
		}
	});
	
	it('Click on Register', async function() {
		this.retries(2);
		try {
			await home.get_home_page();
			await home.click_register();
		} finally {
			console.log('Ok!');
		}
	});
	
	it('Click on Support', async function() {
		this.retries(2);
		try {
			await home.get_home_page();
			await home.click_support();
		} finally {
			console.log('Ok!');
		}
	});
	
	it('Click on Contact', async function() {
		this.retries(2);
		try {
			await home.get_home_page();
			await home.click_contact();
		} finally {
			console.log('Ok!');
		}
	});
});