var DragAndDrop = require('../POM/Pages/DragAndDropPage.js');
var drag_and_drop = new DragAndDrop();
var driver = drag_and_drop.driver;
	
describe('Drag and Drop example', function() {
	this.timeout(10000);
	
	after(async function() {
		await driver.quit();
		console.log('Finally!');
	});
	
	it('Drag and Drop', async function() {
		this.retries(2);
		try {
			await drag_and_drop.get_page();
			await drag_and_drop.drag_and_drop();
		} finally {
			console.log('Ok!');
		}
	});
});