'use strict'

const INF = 900719925474099;
function mapint(temp){
    return temp.split(' ').map((v)=>parseInt(v));
}

function Main(input){
    let temp = input.trim().split('\n');
    let n = parseInt(temp[0]);
    let w = mapint(temp[1]);

    let s1 = w[0];
    let s2 = 0;
    for(let i=1;i<n;i++){
        s2+=w[i];
    }
    let sa = Math.abs(s1-s2);
    let sa2;
    for(let i=1;i<n;i++){
        s1+=w[i];
        s2-=w[i];

        sa = Math.min(sa,Math.abs(s1-s2));
    }
    console.log(sa);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
