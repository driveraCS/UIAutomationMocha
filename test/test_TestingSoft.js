var Home = require('../POM/Pages/TestingSoftPage.js');
var home = new Home();
var driver = home.driver;
const { expect } = require('chai');
	
describe('Get Testing Software Page', function() {
	this.timeout(30000);
	
	after(async function() {
		await driver.quit();
		console.log('Finally!');
	});
	
	it('Navigate!', async function() {
		this.retries(2);
		try {
			await home.get_page();
			expect(await driver.getTitle()).to.equal('Testing Software | Near Shore - Agile QA Consultancy For Development');
			await home.click_search();
			await home.set_input();
			expect(await driver.getTitle()).to.equal('Framework | Testing Software');
			await home.back_nav();
			await home.hover_what_is_ts();
			await home.click_services();
			expect(await driver.getTitle()).to.equal('Services | Testing Software');
		} finally {
			console.log('Ok!');
		}
	});
});