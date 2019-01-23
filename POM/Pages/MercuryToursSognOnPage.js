var home = new Home();

const {Builder, By, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
let driver = new Builder().forBrowser('chrome').build();

module.exports = function() {
	this.driver = driver;
};