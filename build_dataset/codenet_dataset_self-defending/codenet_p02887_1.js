function main(arg) {
    var arg2 = arg.split(/\n/g);
	var honbun = arg2[1];
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for(i=0;i<alphabet.length;i++){
		var iro = alphabet.substr(i,1);
		var regkun = new RegExp(iro+"+", 'g');
		honbun = honbun.replace(regkun,iro);
	}
	console.log(honbun.length);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));