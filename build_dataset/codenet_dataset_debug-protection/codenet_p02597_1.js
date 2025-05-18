function MainD(input){
    const arr = input.split('\n');
    const N = arr[0];
    const Ci = arr[1].split('');
    let answer = 0;

    // Wの数を数える
    let Wnum = 0;
    for(let i=0; i<Ci.length; i++){
        if(Ci[i] === 'W'){
            Wnum++;
        }
    }
    if(Wnum===0) return console.log(0); // Wが現れなかったら0を出力

    // Wの数以降のRの数を数える
    for(let i=Wnum-1; i<Ci.length; i++){
        if(Ci[i] === 'R'){
            answer++;
        }
    }
    console.log(answer);
}
MainD(require("fs").readFileSync("/dev/stdin", "utf8"));
