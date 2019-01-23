var expect = require('chai').expect;
var Home = require('../MercuryToursHomeLocators.js');
var home = new Home();

const {Builder, By, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
	
	this.get_home_page = async function() {
		await driver.get('http://newtours.demoaut.com/');
		await driver.wait(until.titleIs('Welcome: Mercury Tours'));
	};
	
	this.click_sign_on = async function() {
		await driver.findElement(By.css(home.sign_on)).click();
		await driver.wait(until.titleIs('Sign-on: Mercury Tours'));
	};
	
	this.click_register = async function() {
		await driver.findElement(By.css(home.register)).click();
		await driver.wait(until.titleIs('Register: Mercury Tours'));
	};
	
	this.click_support = async function() {
		await driver.findElement(By.css(home.support)).click();
		await driver.wait(until.titleIs('Under Construction: Mercury Tours'));
	};
	
	this.click_contact = async function() {
		await driver.findElement(By.css(home.contact)).click();
		await driver.wait(until.titleIs('Under Construction: Mercury Tours'));
	};
};