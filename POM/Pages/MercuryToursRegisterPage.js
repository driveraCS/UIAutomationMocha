var Home = require('../MercuryToursHomeLocators.js');
var home = new Home();
var Register = require('../MercuryToursRegisterLocators.js');
var register = new Register();

const {Builder, By, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
	
	this.get_register_page = async function() {
		await driver.get('http://newtours.demoaut.com/');
		await driver.wait(until.titleIs('Welcome: Mercury Tours'));
		await driver.findElement(By.css(home.register)).click();
		await driver.wait(until.titleIs('Register: Mercury Tours'));
	};
	
	this.set_first_name = async function() {
		await driver.findElement(By.name(register.first_name)).sendKeys('Diego');
	};
	
	this.set_last_name = async function() {
		await driver.findElement(By.name(register.last_name)).sendKeys('Rivera');
	};
	
	this.set_phone = async function() {
		await driver.findElement(By.name(register.phone)).sendKeys('84563210');
	};
	
	this.set_email = async function() {
		await driver.findElement(By.id(register.email)).sendKeys('test@gmail.com');
	};
	
	this.set_country = async function() {
		await driver.findElement(By.name(register.country)).sendKeys('COSTA RICA');
	};
	
	this.set_user_name = async function() {
		await driver.findElement(By.id(register.user_name)).sendKeys('diego09');
	};
	
	this.set_password = async function() {
		await driver.findElement(By.name(register.password)).sendKeys('123456');
	};
	
	this.set_confirm_password = async function() {
		await driver.findElement(By.name(register.confirm_password)).sendKeys('123456');
	};
	
	this.click_submit = async function() {
		await driver.findElement(By.name(register.submit)).click();
	};
};