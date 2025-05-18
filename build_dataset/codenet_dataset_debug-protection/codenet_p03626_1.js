function main(input){
    var tmp = input.split(/\r\n|\r|\n/);
    var N = Number(tmp[0]);
    var S = tmp[1].split('');
    //console.log(N, S);

    var res;
    var i = 0;
    var isYoko;
    if(S[i]==S[i+1]){
        res = 6;
        i = i+2;
        isYoko = true;
    }else{
        res = 3;
        i++;
        isYoko = false;
    }

    for(; i<N-1; i++){
        if(S[i]==S[i+1]){
            if(isYoko){
                res = res * 3;
            }else{
                res = res * 2;
            }
            i++;
            isYoko = true;
        }else{
            if(!isYoko){
                res = res * 2;
            }
            isYoko = false;
        }
    }

    if(i<N){
        if(!isYoko){
            res = res * 2;
        }
    }

    console.log(res%1000000007);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));