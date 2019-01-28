var Home = require('../iFrameLocators.js');
var home = new Home();

const {Builder, By, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
	
	this.get_page = async function() {
		await driver.manage().window().maximize();
		await driver.get('https://www.dezlearn.com/testingpage/');
		await driver.wait(until.titleIs('TestingPage - De ZINNIA'));
	};
	
	this.click_confirm_seat = async function() {
		await driver.wait(until.elementLocated(By.css(home.confirm_seat)), 30000).click();
		await driver.switchTo().alert().accept();
	};
	
	this.change_to_iFrame1 = async function() {
		iFrame = await driver.wait(until.elementLocated(By.id(home.iframe1)), 30000);
		await driver.switchTo().frame(iFrame);
	};
	
	this.change_to_iFrame2 = async function() {
		iFrame = await driver.wait(until.elementLocated(By.id(home.iframe2)), 30000);
		await driver.switchTo().frame(iFrame);
	};
	
	this.change_to_parent_frame = async function() {
		await driver.switchTo().defaultContent();
	};
	
	// iFrame 1 methods
	this.set_search_input = async function() {
		elem = await driver.wait(until.elementLocated(By.name(home.search_input)), 30000);
		await elem.clear();
		await elem.sendKeys('google.com');
	};
	
	this.click_search_btn = async function() {
		await driver.wait(until.elementLocated(By.css(home.search_btn)), 30000).click();
	};
	
	// iFrame 2 methods
	this.set_name = async function() {
		elem = await driver.wait(until.elementLocated(By.id(home.name)), 30000);
		await elem.clear();
		await elem.sendKeys('Diego');
	};
	
	this.set_email = async function() {
		elem = await driver.wait(until.elementLocated(By.id(home.email)), 30000);
		await elem.clear();
		await elem.sendKeys('test@gmail.com');
	};
	
	this.set_message = async function() {
		elem = await driver.wait(until.elementLocated(By.id(home.message)), 30000);
		await elem.clear();
		await elem.sendKeys('Aaaaaaaaaaaaaa bbbbbbbbbbbbbb ccccccccccccc ddddddddddddddd.');
	};
	
	this.click_send = async function() {
		await driver.wait(until.elementLocated(By.id(home.send)), 30000).click();
	};
};