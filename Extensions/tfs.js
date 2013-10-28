var ext_plugin = {};

$(function(){
	ext_plugin.base_path = window.location.protocol + '//' + window.location.hostname + '/';
	ext_plugin.project_name = $('.project-name').html();
	var element = $('.hub-groups');
	element.append('<li id="files-link"><a href="javascript:files();">Files</a></li>');
	element.append('<li id="wiki-link"><a href="javascript:wiki();">Wiki</a></li>');
});

function wiki() {
	$('.hub-groups>.selected').removeClass('selected');
	$('#wiki-link').addClass('selected');
	$('.hubs-section>.hubs').html('<li class="selected"><a href="#">Wiki</a></li>');
	$(".hub-content").html('<iframe width="100%" height="98%" src="'  + ext_plugin.base_path + 'wiki/' + ext_plugin.project_name + '"></iframe>');  
}

function files() {
	$('.hub-groups>.selected').removeClass('selected');
	$('#files-link').addClass('selected');
	$('.hubs-section>.hubs').html('<li class="selected"><a href="#">Files</a></li>');
	$(".hub-content").html('<iframe width="100%" height="98%" src="'  + ext_plugin.base_path + 'file?p=' + ext_plugin.project_name + '"></iframe>');  
}