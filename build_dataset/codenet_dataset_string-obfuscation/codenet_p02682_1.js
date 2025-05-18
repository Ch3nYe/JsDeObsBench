"use strict"
function main(arg) {
    let getInt = arg.trim().split(" ")[3];
    let oneCount = arg.trim().split(" ")[0];
    let zeroCnt = arg.trim().split(" ")[1];
    let minusCnt = arg.trim().split(" ")[2];

    let result = 0;

    if(oneCount == 0 && zeroCnt == 0 && minusCnt == 0){
        console.log(0);
        return;
    }

    if(getInt > 0){
        
        if(getInt > oneCount){
            result = oneCount * 1;   
        }else{
            result = getInt * 1;
        }
        getInt = getInt - oneCount;
    }

    if(getInt > 0){
        getInt = getInt - zeroCnt;
    }

    if(getInt > 0){
        result = result + (getInt * - 1);
    }

    console.log(result);

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));