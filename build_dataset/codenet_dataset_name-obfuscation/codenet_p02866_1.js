function main(arg) {
    var arg2 = arg.split("\n")[1].split(/\s/g); //元データ
    var kazoe = []; //各数字の個数の配列

	for(i=0;i<arg.split("\n")[0];i++){
		//もし存在しなければ作る
		if(!kazoe[arg2[i]]){
			kazoe[arg2[i]] = 0;
		}
		kazoe[arg2[i]] += 1;
	}
	//答えは(1の個数)^(2の個数)*(2の個数)^(3の個数)*(3の個数)^(4の個数)*…*(N-1の個数)^(Nの個数)
	var ans = 1;
	for(j=0;j<kazoe.length;j++){
	    if(j>1){
	    	ans = ans * Math.pow(kazoe[j-1],kazoe[j]);
	    }
	    //もし間に歯抜けがあればfalse
	    if(!kazoe[j]){
	       ans = 0;
	       break;
	    }
	}
    console.log(ans%998244353);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));