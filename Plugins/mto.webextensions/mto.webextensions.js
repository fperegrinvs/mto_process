TFS.module("MTO.WebExtensions",[], function(){ add_script(); });

function add_script() {
	var host = window.location.protocol + '//' + window.location.hostname;
	$.getScript(host + "/extensions/tfs.js", function() { });
}