var Home = require('../MercuryToursHomeLocators.js');
var home = new Home();
var SignOn = require('../MercuryToursSignOnLocators.js');
var sign_on = new SignOn();

const {Builder, By, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
	
	this.get_sign_on_page = async function() {
		await driver.get('http://newtours.demoaut.com/');
		await driver.wait(until.titleIs('Welcome: Mercury Tours'));
		await driver.findElement(By.css(home.sign_on)).click();
		await driver.wait(until.titleIs('Sign-on: Mercury Tours'));
	};
	
	this.set_user_name = async function() {
		await driver.findElement(By.name(sign_on.user_name)).sendKeys('diego09');
	};
	
	this.set_password = async function() {
		await driver.findElement(By.name(sign_on.password)).sendKeys('123456');
	};
	
	this.click_submit = async function() {
		await driver.findElement(By.name(sign_on.submit)).click();
	};
};