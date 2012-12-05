/*global console:false, $:false*/
var sandbox = (function(){
	'use strict';
	function init(){
		console.log('Init');
	}
	return {
		init: init
	};
}());

$(function(){
	sandbox.init();
});