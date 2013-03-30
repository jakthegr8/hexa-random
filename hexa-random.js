var hRandom 	    = 	module.exports = {};
hRandom.generateUID = 	function() {
							var resId = [], hex = '0123456789ABCDEF';

							for (var i = 0; i < 36; i++) resId[i] = Math.floor(Math.random()*0x10);

							resId[14] = 4;
							resId[19] = (resId[19] & 0x3) | 0x8;

							for (var i = 0; i < 36; i++) resId[i] = hex[resId[i]];

							resId[8] = resId[13] = resId[18] = resId[23] = '-';

							return resId.join('');
						};