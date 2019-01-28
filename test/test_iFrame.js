var Home = require('../POM/Pages/iFramePage.js');
var home = new Home();
var driver = home.driver;
const { expect } = require('chai');
	
describe('Handling iFrames', function() {
	this.timeout(30000);
	
	after(async function() {
		await driver.quit();
		console.log('Finally!');
	});
	
	it('Go!', async function() {
		this.retries(2);
		try {
			await home.get_page();
			expect(await driver.getTitle()).to.equal('TestingPage - De ZINNIA');
			await home.change_to_iFrame1();
			
			await home.set_search_input();
			await home.click_search_btn();
			await home.change_to_parent_frame();
			await home.change_to_iFrame2();
			
			await home.set_name();
			await home.set_email();
			await home.set_message();
			await home.click_send();
			await home.change_to_parent_frame();
			
			await home.click_confirm_seat();
		} finally {
			console.log('Ok!');
		}
	});
});