process.stdin.resume();
process.stdin.setEncoding('utf8');
// Here your code !
x=require('fs').readFileSync('/dev/stdin','utf8').trim().split(/\s/);
for(i=0;i<x.length;i+=2){
    count=0;
    y=x[i];
    //if(i!=0||i==x.length-1)console.log();
    if(y+x[i+1]==0)break;
    for(;y<=x[i+1];y++){
        if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)){
            console.log(String(y).trim());
            count++;
        }
    }
    if(i!=0||i==x.length-1)console.log();
    if(count==0){
        console.log("NA\n");
    }
    
}