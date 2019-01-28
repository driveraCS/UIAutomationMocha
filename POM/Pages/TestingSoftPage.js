var Home = require('../TestingSoftLocators.js');
var home = new Home();

const {Builder, By, Key, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
	
	this.get_page = async function() {
		await driver.manage().window().maximize();
		await driver.get('http://www.testingsoft.com/');
		await driver.wait(until.titleIs('Testing Software | Near Shore - Agile QA Consultancy For Development'));
	};
	
	this.click_search = async function() {
		await driver.findElement(By.id(home.search)).click();
	};
	
	this.set_input = async function() {
		await driver.findElement(By.name(home.input)).sendKeys('Framework', Key.ENTER);
	};
	
	this.hover_what_is_ts = async function() {
		elem = await driver.findElement(By.id(home.what_is_ts));
		await driver.actions({bridge: true}).move({x: 0, y: 0, origin: elem}).perform();
	};
	
	this.click_services = async function() {
		await driver.findElement(By.id(home.services)).click();
	};
	
	this.back_nav = async function() {
		await driver.navigate().back();
	};
};