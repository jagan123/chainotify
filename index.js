"use strict";

var request = require('request');
module.exports = function sendSMS (number, message, api, callback) {
	return new Promise ((resolve, reject) => {
		if (number && message && api) {
			var uri = encodeURI('https://api.textlocal.in/send/?');
			var encodeapi = encodeURI(api);
			var url = uri + 'apiKey=' + encodeapi + '&numbers=' + number + '&sender=TXTLCL' + '&message=' + message;
			var finalURL = encodeURI(url);
			request(url, function(error, response, html) {
			    if (!error && response.statusCode == 200) {
			        console.log("TEXT SENT SUCCESS")
			        resolve ("text sent");
			    }
			    else {
			        console.log("ERROR", error);
			        reject ("No correct number, api or message text given");
			    }
			});
		} else {
			reject ("No correct number, api or message text given");
		}
	})
}