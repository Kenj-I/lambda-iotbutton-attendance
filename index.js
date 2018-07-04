'use strict'

const request = require('request');
const endpoint = process.env.ENDPOINT;

exports.handler = (event, context, callback) => {

	console.log('start');
	if(event.deviceEvent.buttonClicked.clickType == "SINGLE") {
		var type = 'in.json';
	} else if (event.deviceEvent.buttonClicked.clickType == "DOUBLE") {
		var type = 'out.json';
	} else {
		return false;
	}

	var options = {
		url: endpoint+type,
		formData: {"slack_user_id": event.placementInfo.attributes.slack_user_id},
	}

	request.post(options, function(error, response, body){
	  console.log('error:', error);
	  console.log('statusCode:', response && response.statusCode);
	});

	console.log('end');
}
