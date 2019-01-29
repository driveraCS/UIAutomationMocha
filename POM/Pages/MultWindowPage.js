var Home = require('../MultWindowLocators.js');
var home = new Home();

const {Builder, By, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
	
	this.get_page = async function() {
		await driver.manage().window().maximize();
		await driver.get('https://hkinsley.com/');
		await driver.wait(until.titleIs('Harrison Kinsley'), 30000);
	};
	
	this.click_python_link = async function() {
		await driver.wait(until.elementLocated(By.css(home.python_link)), 30000).click();
	};
	
	this.click_contact = async function() {
		await driver.wait(until.elementLocated(By.css(home.contact)), 30000).click();
	};
	
	this.switch_to_window = async function(new_window) {
		await driver.switchTo().window(new_window);
	};
	
	// new window
	this.click_data_analysis = async function() {
		await driver.wait(until.titleIs('Python Programming Tutorials'), 30000);
		await driver.wait(until.elementLocated(By.css(home.data_analysis)), 30000).click();
	};
	
	this.click_robotics = async function() {
		await driver.wait(until.elementLocated(By.css(home.robotics)), 30000).click();
	};
};