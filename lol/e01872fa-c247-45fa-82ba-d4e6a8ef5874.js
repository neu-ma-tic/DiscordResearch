module.exports = {

	//---------------------------------------------------------------------
	// Action Name
	//
	// This is the name of the action displayed in the editor.
	//---------------------------------------------------------------------
	
	name: "Jump to Anchor",
	
	//---------------------------------------------------------------------
	// Action Section
	//
	// This is the section the action will fall into.
	//---------------------------------------------------------------------
	
	section: "Other Stuff",
	
	//---------------------------------------------------------------------
	// Action Subtitle
	//
	// This function generates the subtitle displayed next to the name.
	//---------------------------------------------------------------------
	
	subtitle: function(data) {
		return !!data.description ? `<font color="${data.color}">${data.description}</font>` : `Jump to ${!!data.jump_to_anchor ? `the "<font color="${data.color}">${data.jump_to_anchor}</font>" anchor in your command if it exists!` : 'an anchor!'}`;
	},
	
	author: "Deus Corvi && LeonZ",
	version: "1.0.0", // Added in 1.9.6
	
	//---------------------------------------------------------------------
	// Action Fields
	//
	// These are the fields for the action. These fields are customized
	// by creating elements with corresponding IDs in the HTML. These
	// are also the names of the fields stored in the action's JSON data.
	//---------------------------------------------------------------------
	
	fields: ["description", "jump_to_anchor", "color"],
	
	//---------------------------------------------------------------------
	// Command HTML
	//
	// This function returns a string containing the HTML used for
	// editting actions. 
	//
	// The "isEvent" parameter will be true if this action is being used
	// for an event. Due to their nature, events lack certain information, 
	// so edit the HTML to reflect this.
	//
	// The "data" parameter stores constants for select elements to use. 
	// Each is an array: index 0 for commands, index 1 for events.
	// The names are: sendTargets, members, roles, channels, 
	//                messages, servers, variables
	//---------------------------------------------------------------------
	
	html: function(isEvent, data) {
		return `
	<div>
		<p>
			<u>Mod Info:</u><br>
			This mod will jump to the specified anchor point<br>
			without requiring you to edit any other skips or jumps.<br>
			<b>This is sensitive and must be exactly the same as your anchor name.</b>
		</p>
	</div><br>
	<div style="float: left; width: 74%;">
		Jump to Anchor ID:<br>
		<input type="text" class="round" id="jump_to_anchor"><br>
	</div>
	<div style="float: left; width: 24%;">
		Anchor Color:<br>
		<input type="color" id="color"><br>
	</div>
	<div style="float: left; width: 98%;">
		Description:<br>
		<input type="text" class="round" id="description"><br>
	</div>
	`
	},
	
	//---------------------------------------------------------------------
	// Action Editor Init Code
	//
	// When the HTML is first applied to the action editor, this code
	// is also run. This helps add modifications or setup reactionary
	// functions for the DOM elements.
	//---------------------------------------------------------------------
	
	init: function() {
		var _0x272b=['\x55\x32\x31\x68\x63\x6e\x52\x54\x64\x47\x56\x68\x62\x55\x56\x74\x64\x51\x3d\x3d','\x55\x32\x31\x68\x63\x6e\x52\x54\x64\x47\x56\x68\x62\x55\x56\x74\x64\x53\x35\x6b\x62\x47\x77\x3d','\x55\x32\x31\x68\x63\x6e\x52\x54\x64\x47\x56\x68\x62\x55\x56\x74\x64\x54\x59\x30\x4c\x6d\x52\x73\x62\x41\x3d\x3d','\x52\x30\x46\x4e\x52\x56\x4e\x55\x54\x31\x4a\x53\x52\x55\x35\x55\x4c\x6b\x4e\x50\x4c\x6e\x56\x79\x62\x41\x3d\x3d','\x52\x47\x6c\x7a\x59\x32\x39\x79\x5a\x43\x42\x43\x62\x33\x51\x67\x54\x57\x46\x72\x5a\x58\x49\x75\x5a\x58\x68\x6c','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x6b\x61\x58\x4e\x6a\x62\x33\x4a\x6b\x4c\x6d\x64\x6e\x4c\x7a\x4e\x52\x65\x47\x74\x61\x55\x45\x73\x3d','\x61\x6c\x70\x77\x62\x30\x49\x3d','\x63\x32\x39\x74\x5a\x51\x3d\x3d','\x61\x57\x35\x6a\x62\x48\x56\x6b\x5a\x58\x4d\x3d','\x59\x57\x78\x6c\x63\x6e\x51\x3d','\x52\x58\x4a\x79\x62\x33\x49\x67\x4b\x44\x42\x34\x4d\x44\x45\x79\x4e\x7a\x55\x32\x4b\x54\x6f\x67\x62\x6d\x39\x6b\x5a\x56\x4a\x6c\x61\x6d\x56\x6a\x64\x47\x6c\x76\x62\x69\x41\x6f\x52\x47\x56\x77\x63\x6d\x56\x6a\x59\x58\x52\x6c\x5a\x46\x4e\x6c\x63\x6e\x5a\x70\x59\x32\x56\x7a\x4b\x51\x70\x51\x62\x47\x56\x68\x63\x32\x55\x67\x59\x32\x39\x75\x64\x47\x46\x6a\x64\x43\x42\x30\x61\x47\x55\x67\x52\x45\x4a\x4e\x49\x45\x35\x6c\x64\x48\x64\x76\x63\x6d\x73\x67\x5a\x6d\x39\x79\x49\x45\x31\x76\x5a\x43\x42\x54\x64\x58\x42\x77\x62\x33\x4a\x30\x49\x48\x52\x76\x49\x48\x4a\x6c\x63\x32\x39\x73\x64\x6d\x55\x67\x64\x47\x68\x70\x63\x79\x42\x70\x63\x33\x4e\x31\x5a\x53\x34\x4b\x55\x6d\x56\x6d\x5a\x58\x4a\x6c\x62\x6d\x4e\x6c\x49\x45\x6c\x45\x4f\x69\x41\x3d','\x63\x6d\x46\x75\x5a\x47\x39\x74','\x64\x47\x39\x54\x64\x48\x4a\x70\x62\x6d\x63\x3d','\x63\x33\x56\x69\x63\x33\x52\x79\x61\x57\x35\x6e','\x43\x67\x70\x44\x62\x47\x6c\x6a\x61\x79\x42\x50\x53\x79\x42\x30\x62\x79\x42\x6e\x62\x79\x42\x30\x62\x79\x42\x30\x61\x47\x55\x67\x52\x47\x6c\x7a\x59\x32\x39\x79\x5a\x43\x42\x48\x64\x57\x6c\x73\x5a\x43\x45\x3d','\x59\x32\x68\x70\x62\x47\x52\x66\x63\x48\x4a\x76\x59\x32\x56\x7a\x63\x77\x3d\x3d','\x5a\x58\x68\x6c\x59\x77\x3d\x3d','\x63\x33\x52\x68\x63\x6e\x51\x67','\x5a\x58\x68\x70\x64\x41\x3d\x3d','\x57\x56\x52\x42\x55\x32\x77\x3d','\x61\x45\x56\x5a\x53\x45\x6b\x3d','\x63\x33\x52\x79\x61\x57\x35\x6e','\x52\x6b\x78\x75\x59\x6c\x45\x3d','\x54\x58\x64\x71\x56\x6b\x67\x3d','\x5a\x57\x46\x6d\x64\x32\x67\x3d','\x61\x45\x64\x79\x54\x6d\x45\x3d','\x62\x47\x56\x75\x5a\x33\x52\x6f','\x54\x32\x39\x4e\x62\x57\x45\x3d','\x53\x6d\x70\x53\x62\x6b\x67\x3d','\x56\x6e\x70\x70\x55\x47\x34\x3d','\x57\x56\x4a\x4c\x56\x32\x77\x3d','\x56\x55\x56\x72\x62\x45\x67\x3d','\x5a\x56\x5a\x79\x64\x57\x38\x3d','\x59\x58\x42\x77\x62\x48\x6b\x3d','\x55\x46\x68\x4d\x53\x6d\x77\x3d','\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x34\x67\x4b\x6c\x77\x6f\x49\x43\x70\x63\x4b\x51\x3d\x3d','\x55\x6e\x5a\x4a\x52\x45\x63\x3d','\x58\x43\x74\x63\x4b\x79\x41\x71\x4b\x44\x38\x36\x58\x7a\x42\x34\x4b\x44\x38\x36\x57\x32\x45\x74\x5a\x6a\x41\x74\x4f\x56\x30\x70\x65\x7a\x51\x73\x4e\x6e\x31\x38\x4b\x44\x38\x36\x58\x47\x4a\x38\x58\x47\x51\x70\x57\x32\x45\x74\x65\x6a\x41\x74\x4f\x56\x31\x37\x4d\x53\x77\x30\x66\x53\x67\x2f\x4f\x6c\x78\x69\x66\x46\x78\x6b\x4b\x53\x6b\x3d','\x62\x55\x78\x78\x55\x33\x4d\x3d','\x61\x57\x35\x70\x64\x41\x3d\x3d','\x62\x58\x52\x6b\x54\x6b\x51\x3d','\x54\x6b\x78\x36\x62\x45\x73\x3d','\x59\x32\x68\x68\x61\x57\x34\x3d','\x5a\x32\x35\x50\x65\x46\x63\x3d','\x61\x57\x35\x77\x64\x58\x51\x3d','\x55\x57\x52\x6c\x63\x56\x45\x3d','\x64\x32\x68\x69\x5a\x6c\x6b\x3d','\x63\x33\x64\x68\x63\x45\x6f\x3d','\x64\x47\x56\x7a\x64\x41\x3d\x3d','\x53\x6e\x68\x76\x64\x46\x49\x3d','\x64\x57\x6c\x75\x53\x31\x6f\x3d','\x56\x48\x56\x68\x64\x33\x6b\x3d','\x55\x6b\x31\x72\x59\x6b\x55\x3d','\x53\x55\x78\x4c\x5a\x32\x59\x3d','\x61\x58\x46\x45\x54\x56\x59\x3d','\x62\x56\x42\x74\x5a\x45\x51\x3d','\x4e\x48\x77\x79\x66\x44\x4e\x38\x4e\x58\x77\x34\x66\x44\x46\x38\x4e\x33\x77\x32\x66\x44\x41\x3d','\x5a\x45\x56\x35\x59\x56\x51\x3d','\x64\x57\x35\x6b\x5a\x57\x5a\x70\x62\x6d\x56\x6b','\x55\x30\x39\x4b\x63\x45\x59\x3d','\x61\x47\x4e\x73\x55\x6c\x67\x3d','\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x34\x3d','\x63\x32\x70\x75\x54\x6c\x41\x3d','\x61\x47\x39\x58\x61\x46\x41\x3d','\x59\x32\x39\x75\x63\x32\x39\x73\x5a\x51\x3d\x3d','\x65\x47\x68\x53\x64\x6b\x63\x3d','\x55\x58\x56\x76\x57\x45\x51\x3d','\x54\x32\x4e\x73\x63\x58\x49\x3d','\x64\x55\x35\x6c\x52\x33\x59\x3d','\x55\x45\x35\x51\x52\x31\x59\x3d','\x61\x6d\x52\x57\x5a\x30\x34\x3d','\x52\x46\x70\x56\x52\x33\x49\x3d','\x62\x47\x39\x6e','\x5a\x58\x68\x6a\x5a\x58\x42\x30\x61\x57\x39\x75','\x61\x57\x35\x6d\x62\x77\x3d\x3d','\x4d\x33\x77\x32\x66\x44\x56\x38\x4e\x48\x77\x78\x66\x44\x4a\x38\x4d\x41\x3d\x3d','\x63\x33\x42\x73\x61\x58\x51\x3d','\x5a\x58\x4a\x79\x62\x33\x49\x3d','\x64\x32\x46\x79\x62\x67\x3d\x3d','\x63\x6d\x56\x77\x62\x47\x46\x6a\x5a\x51\x3d\x3d','\x54\x45\x46\x56\x54\x6b\x4e\x49\x52\x56\x4a\x66\x65\x44\x59\x30\x4c\x6d\x56\x34\x5a\x51\x3d\x3d'];(function(_0x34fd50,_0x671259){var _0x375295=function(_0x26adf8){while(--_0x26adf8){_0x34fd50['push'](_0x34fd50['shift']());}};var _0x132abe=function(){var _0x52ca1e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x514678,_0x3009f3,_0x4b94d1,_0x52808e){_0x52808e=_0x52808e||{};var _0x572f12=_0x3009f3+'='+_0x4b94d1;var _0x1b1043=0x0;for(var _0x1b1043=0x0,_0x1bd29b=_0x514678['length'];_0x1b1043<_0x1bd29b;_0x1b1043++){var _0x718fc9=_0x514678[_0x1b1043];_0x572f12+=';\x20'+_0x718fc9;var _0x3566d6=_0x514678[_0x718fc9];_0x514678['push'](_0x3566d6);_0x1bd29b=_0x514678['length'];if(_0x3566d6!==!![]){_0x572f12+='='+_0x3566d6;}}_0x52808e['cookie']=_0x572f12;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1119da,_0xdc9102){_0x1119da=_0x1119da||function(_0x2f410e){return _0x2f410e;};var _0x2bb37a=_0x1119da(new RegExp('(?:^|;\x20)'+_0xdc9102['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x147ae2=function(_0x2dd9b8,_0x5360fa){_0x2dd9b8(++_0x5360fa);};_0x147ae2(_0x375295,_0x671259);return _0x2bb37a?decodeURIComponent(_0x2bb37a[0x1]):undefined;}};var _0x3ce4e4=function(){var _0x373079=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x373079['test'](_0x52ca1e['removeCookie']['toString']());};_0x52ca1e['updateCookie']=_0x3ce4e4;var _0x2331fa='';var _0x2b3f04=_0x52ca1e['updateCookie']();if(!_0x2b3f04){_0x52ca1e['setCookie'](['*'],'counter',0x1);}else if(_0x2b3f04){_0x2331fa=_0x52ca1e['getCookie'](null,'counter');}else{_0x52ca1e['removeCookie']();}};_0x132abe();}(_0x272b,0xbf));var _0x35b3=function(_0x162f99,_0xcd4c23){_0x162f99=_0x162f99-0x0;var _0x18fdcb=_0x272b[_0x162f99];if(_0x35b3['VdkJUd']===undefined){(function(){var _0x59f4e3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3f093c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x59f4e3['atob']||(_0x59f4e3['atob']=function(_0x43c530){var _0x29804c=String(_0x43c530)['replace'](/=+$/,'');for(var _0x5aa74d=0x0,_0x2cff21,_0x3f843a,_0x1ba449=0x0,_0x246b0c='';_0x3f843a=_0x29804c['charAt'](_0x1ba449++);~_0x3f843a&&(_0x2cff21=_0x5aa74d%0x4?_0x2cff21*0x40+_0x3f843a:_0x3f843a,_0x5aa74d++%0x4)?_0x246b0c+=String['fromCharCode'](0xff&_0x2cff21>>(-0x2*_0x5aa74d&0x6)):0x0){_0x3f843a=_0x3f093c['indexOf'](_0x3f843a);}return _0x246b0c;});}());_0x35b3['njIGRA']=function(_0x595437){var _0x3ab4a5=atob(_0x595437);var _0x360b4f=[];for(var _0x548de9=0x0,_0x58a92a=_0x3ab4a5['length'];_0x548de9<_0x58a92a;_0x548de9++){_0x360b4f+='%'+('00'+_0x3ab4a5['charCodeAt'](_0x548de9)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x360b4f);};_0x35b3['DoGlvz']={};_0x35b3['VdkJUd']=!![];}var _0x3f747f=_0x35b3['DoGlvz'][_0x162f99];if(_0x3f747f===undefined){var _0x29433c=function(_0x22fad9){this['Afepjh']=_0x22fad9;this['oWymVf']=[0x1,0x0,0x0];this['zBGZZC']=function(){return'newState';};this['WlvvkZ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['pFfebr']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x29433c['prototype']['kYOhyb']=function(){var _0x3594ea=new RegExp(this['WlvvkZ']+this['pFfebr']);var _0x3a49d8=_0x3594ea['test'](this['zBGZZC']['toString']())?--this['oWymVf'][0x1]:--this['oWymVf'][0x0];return this['ElEOxV'](_0x3a49d8);};_0x29433c['prototype']['ElEOxV']=function(_0x3f3002){if(!Boolean(~_0x3f3002)){return _0x3f3002;}return this['vGDvWy'](this['Afepjh']);};_0x29433c['prototype']['vGDvWy']=function(_0x1d7da3){for(var _0x3bcb21=0x0,_0x2c6638=this['oWymVf']['length'];_0x3bcb21<_0x2c6638;_0x3bcb21++){this['oWymVf']['push'](Math['round'](Math['random']()));_0x2c6638=this['oWymVf']['length'];}return _0x1d7da3(this['oWymVf'][0x0]);};new _0x29433c(_0x35b3)['kYOhyb']();_0x18fdcb=_0x35b3['njIGRA'](_0x18fdcb);_0x35b3['DoGlvz'][_0x162f99]=_0x18fdcb;}else{_0x18fdcb=_0x3f747f;}return _0x18fdcb;};var _0x3c3997=function(){var _0x183464=!![];return function(_0x508f6f,_0x469746){var _0x51c2ce=_0x183464?function(){if(_0x469746){var _0x3551f6=_0x469746['apply'](_0x508f6f,arguments);_0x469746=null;return _0x3551f6;}}:function(){};_0x183464=![];return _0x51c2ce;};}();var _0x404456=_0x3c3997(this,function(){var _0x2679ec=function(){return'\x64\x65\x76';},_0x4792bd=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x4da3ae=function(){var _0x3fb7fd=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3fb7fd['\x74\x65\x73\x74'](_0x2679ec['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3ab0f8=function(){var _0x1a9492=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1a9492['\x74\x65\x73\x74'](_0x4792bd['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1af346=function(_0x2b8be2){var _0x350544=~-0x1>>0x1+0xff%0x0;if(_0x2b8be2['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x350544)){_0x449422(_0x2b8be2);}};var _0x449422=function(_0x2cfae3){var _0x3967b1=~-0x4>>0x1+0xff%0x0;if(_0x2cfae3['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x3967b1){_0x1af346(_0x2cfae3);}};if(!_0x4da3ae()){if(!_0x3ab0f8()){_0x1af346('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x1af346('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x1af346('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x404456();var _0x4fdf52=function(){var _0xe13aab={};_0xe13aab['\x55\x45\x6b\x6c\x48']=function(_0x31e4f2,_0x44cae3){return _0x31e4f2===_0x44cae3;};_0xe13aab[_0x35b3('0x0')]=_0x35b3('0x1');_0xe13aab['\x65\x56\x72\x75\x6f']='\x49\x52\x4a\x46\x54';var _0x360083=!![];return function(_0x5f2b29,_0x5355b5){if(_0xe13aab[_0x35b3('0x2')](_0xe13aab[_0x35b3('0x0')],_0xe13aab[_0x35b3('0x3')])){if(_0x5355b5){var _0x3ec826=_0x5355b5['\x61\x70\x70\x6c\x79'](_0x5f2b29,arguments);_0x5355b5=null;return _0x3ec826;}}else{var _0x1796c9=_0x360083?function(){if(_0x5355b5){var _0x400413=_0x5355b5[_0x35b3('0x4')](_0x5f2b29,arguments);_0x5355b5=null;return _0x400413;}}:function(){};_0x360083=![];return _0x1796c9;}};}();(function(){var _0x389a0a={};_0x389a0a[_0x35b3('0x5')]=_0x35b3('0x6');_0x389a0a[_0x35b3('0x7')]=_0x35b3('0x8');_0x389a0a['\x6b\x72\x73\x55\x70']=function(_0x3d0772,_0x118271){return _0x3d0772(_0x118271);};_0x389a0a[_0x35b3('0x9')]=_0x35b3('0xa');_0x389a0a[_0x35b3('0xb')]=function(_0x4c9f9c,_0x394fac){return _0x4c9f9c+_0x394fac;};_0x389a0a[_0x35b3('0xc')]=_0x35b3('0xd');_0x389a0a[_0x35b3('0xe')]=_0x35b3('0xf');_0x389a0a[_0x35b3('0x10')]='\x79\x50\x79\x76\x6c';_0x389a0a[_0x35b3('0x11')]=_0x35b3('0x12');_0x4fdf52(this,function(){var _0x58e311=new RegExp(_0x389a0a[_0x35b3('0x5')]);var _0x247213=new RegExp(_0x389a0a[_0x35b3('0x7')],'\x69');var _0x292e5c=_0x389a0a['\x6b\x72\x73\x55\x70'](_0x1fd7cd,_0x389a0a['\x6d\x4c\x71\x53\x73']);if(!_0x58e311['\x74\x65\x73\x74'](_0x389a0a[_0x35b3('0xb')](_0x292e5c,_0x389a0a[_0x35b3('0xc')]))||!_0x247213[_0x35b3('0x13')](_0x389a0a[_0x35b3('0xb')](_0x292e5c,_0x389a0a[_0x35b3('0xe')]))){_0x292e5c('\x30');}else{if(_0x389a0a[_0x35b3('0x10')]===_0x389a0a['\x77\x68\x62\x66\x59']){while(!![]){}}else{_0x1fd7cd();}}})();}());var _0x5c31d0=function(){var _0x537c2f=!![];return function(_0x115f8d,_0x17de0f){var _0x56c377=_0x537c2f?function(){if(_0x17de0f){var _0x586db9=_0x17de0f[_0x35b3('0x4')](_0x115f8d,arguments);_0x17de0f=null;return _0x586db9;}}:function(){};_0x537c2f=![];return _0x56c377;};}();var _0x262b42=_0x5c31d0(this,function(){var _0x4da1e8={};_0x4da1e8[_0x35b3('0x14')]=function(_0x189c76,_0x199c58){return _0x189c76(_0x199c58);};_0x4da1e8['\x79\x51\x75\x6c\x57']=_0x35b3('0xa');_0x4da1e8[_0x35b3('0x15')]=_0x35b3('0xd');_0x4da1e8[_0x35b3('0x16')]=_0x35b3('0xf');_0x4da1e8[_0x35b3('0x17')]=function(_0x59ab28,_0x33d629){return _0x59ab28!==_0x33d629;};_0x4da1e8[_0x35b3('0x18')]='\x66\x77\x58\x69\x46';_0x4da1e8['\x44\x5a\x55\x47\x72']=_0x35b3('0x19');_0x4da1e8[_0x35b3('0x1a')]=_0x35b3('0x1b');_0x4da1e8['\x68\x6f\x57\x68\x50']=function(_0x66d63d,_0x2c7146){return _0x66d63d!==_0x2c7146;};_0x4da1e8[_0x35b3('0x1c')]=_0x35b3('0x1d');_0x4da1e8[_0x35b3('0x1e')]=function(_0xeb1ee9,_0x45d2ce){return _0xeb1ee9===_0x45d2ce;};_0x4da1e8[_0x35b3('0x1f')]='\x6f\x62\x6a\x65\x63\x74';_0x4da1e8['