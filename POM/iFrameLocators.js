module.exports = function() {
    this.iframe1 = 'do-it-iframe'  // id
    this.iframe2 = 'contact-iframe'  // id
    this.confirm_seat = 'div#pl-197 div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(3) > button' // css selector
	
	// iFrame 1 locators
	this.search_input = 's' // name
    this.search_btn = 'main#main form > input' // css selector
	
	// iFrame 2 locators
	// id
    this.name = 'ninja_forms_field_11' 
    this.email = 'ninja_forms_field_12'
    this.message = 'ninja_forms_field_13'
    this.send = 'ninja_forms_field_14'
};