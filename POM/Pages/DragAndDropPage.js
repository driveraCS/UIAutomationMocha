var Home = require('../DragAndDropLocators.js');
var home = new Home();

const {Builder, By, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
	
	this.get_page = async function() {
		await driver.get('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
		await driver.wait(until.titleIs('Demo 2: Drag and drop'));
	};
	
	this.drag_and_drop = async function() {
		let source_elem = await driver.findElement(By.id(home.s_capital));
		let dest_elem = await driver.findElement(By.id(home.spain));
		// On Chrome actios generate an error, this can be fixed -> actions({bridge: true})
		await driver.actions({bridge: true}).dragAndDrop(source_elem, dest_elem).perform();
	};
};