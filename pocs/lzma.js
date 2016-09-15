var my_lzma = require("lzma");
compress = my_lzma.compress("<Authorization xmlns='http://tempuri.org/'><userName>AdminUser</userName></Authorization>" || byte_array, 1);
var base64 = new Buffer(compress).toString('base64');

console.log(base64);
