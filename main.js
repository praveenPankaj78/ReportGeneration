var express = require('express');
var morgan = require('morgan');
var path = require('path');
var submit = document.getElementById('idSubmitButton');
submit.onclick = function () {
	alert("I am Alert Box");
	
	//Create a request Object
	var request = new XMLHttpRequest();
	
	//Capture the request and store it in the variable
	request.onreadystate = function () {
		if (request.readyState === XMLHttpRequest.DONE) {
			//Take some action
			if (request.status === 200) {
				var name = request.responseText;
				name = JSON.parse(name);
				var output = document.getElementById('result');
				ul
			}
		}
	};
	
};

/*
function showAlert()
{
	alert("I am Alert Box");
}*/