var estilizame = function(str,style){
	var styles = {
			'underline'   : ['\x1B[4m',  '\x1B[24m'],
			'inverse'     : ['\x1B[7m',  '\x1B[27m'],
			'white'       : ['\x1B[38m', '\x1B[39m'],
			'grey'        : ['\x1B[37m', '\x1B[39m'],
			'black'       : ['\x1B[30m', '\x1B[39m'],
			'blue'        : ['\x1B[34m', '\x1B[39m'],
			'cyan'        : ['\x1B[36m', '\x1B[39m'],
			'green'       : ['\x1B[32m', '\x1B[39m'],
			'magenta'     : ['\x1B[35m', '\x1B[39m'],
			'red'         : ['\x1B[31m', '\x1B[39m'],
			'yellow'      : ['\x1B[33m', '\x1B[39m'],
			'whiteBG'     : ['\x1B[47m', '\x1B[49m'],
			'blackBG'     : ['\x1B[40m', '\x1B[49m'],
			'blueBG'      : ['\x1B[44m', '\x1B[49m'],
			'cyanBG'      : ['\x1B[46m', '\x1B[49m'],
			'greenBG'     : ['\x1B[42m', '\x1B[49m'],
			'magentaBG'   : ['\x1B[45m', '\x1B[49m'],
			'redBG'       : ['\x1B[41m', '\x1B[49m'],
			'yellowBG'    : ['\x1B[43m', '\x1B[49m']
	};
	if(style == 'getAll') return Object.keys(styles);
	return styles[style][0] + str + styles[style][1];
};
estilizame(false,'getAll').forEach(function(style){
	Object.defineProperty(Number.prototype, style, {
		configurable : true,
		get: function(){return estilizame(this.toString(),style);}
	});
	Object.defineProperty(String.prototype, style, {
		configurable : true,
		get: function(){return estilizame(this,style);}
	});
});