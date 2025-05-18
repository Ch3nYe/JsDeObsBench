function main(input){
    let numarray=input.split(' ').map(Number);
    let W,H,x,y,r;
    W=numarray[0];
    H=numarray[1];
    x=numarray[2];
    y=numarray[3];
    r=numarray[4];
    if (x<r || y<r || x+r > W || y+r > H){
        console.log('No');
    } else {
        console.log('Yes');
    }
    
}
main(require("fs").readFileSync("/dev/stdin","utf8"));
