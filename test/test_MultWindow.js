var Home = require('../POM/Pages/MultWindowPage.js');
var home = new Home();
var driver = home.driver;
const { expect } = require('chai');
	
describe('Handling Multiple Windows', function() {
	this.timeout(30000);
	
	after(async function() {
		await driver.quit();
		console.log('Finally!');
	});
	
	it('Go!', async function() {
		this.retries(2);
		try {
			await home.get_page();
			expect(await driver.getTitle()).to.equal('Harrison Kinsley');
			var parent = await driver.getWindowHandle();
			
			await home.click_python_link();	
			var windows = await driver.getAllWindowHandles();
			// await driver.switchTo().window(windows[1]);
			await home.switch_to_window(windows[1]);
			await home.click_data_analysis();
			
			// await driver.switchTo().window(parent);
			await home.switch_to_window(parent);
			await home.click_contact();
		} finally {
			console.log('Ok!');
		}
	});
});