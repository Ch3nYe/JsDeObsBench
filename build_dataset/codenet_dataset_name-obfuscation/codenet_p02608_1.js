// 一回計算した結果を全て持っておく
function Main(input){
    const N = Number(input);
    let fn = new Array(N).fill(0);
    for(let x=1; x**2<=N; x++){
        for(let y=1; y**2<=N; y++){
            if(x+y > N) break;
            for(let z=1; z**2<=N; z++){
                const i = x**2 + y**2 + z**2 + x*y + y*z + z*x;
                if(i >N) break;
                fn[i-1]++
            }
        }
    }
    console.log(fn.join('\n'));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));