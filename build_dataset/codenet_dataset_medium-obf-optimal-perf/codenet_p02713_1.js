(v=>{
    const gcd = (arr) =>{
        const f = (a,b) => b ? f(b, a % b): a 
        let ans = arr[0]
        for(let i = 1;i<arr.length;i++){
            ans = f(ans, arr[i])
        }
        return ans
    }
    const k = ~~v
    let s = 0
    for(let i = 1;i<=k;i++){
        for(let j = 1;j<=k;j++){
            for(let jj = 1;jj<=k;jj++){
                s += gcd([i, j, jj])
            }
        }
    }
    console.log(s)
})(require("fs").readFileSync("/dev/stdin", "utf8"))