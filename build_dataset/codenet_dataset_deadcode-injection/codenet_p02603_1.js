function main(arg) {
    let n = Number(arg.split("\n")[0])
    let a = arg.split("\n")[1].split(" ").map(Number)
    
    let dp = []
    for(let i=0; i<n+1; i++)dp[i]=0
    dp[0] = 1000
    
    let stock = 0
    for(let i=1; i<n+1; i++) {
        if(i==n) {
        // 売却
            dp[i] = dp[i-1] + stock*a[i-1]
        }else if(a[i]>a[i-1]) {
        // 購入
            let addStock = parseInt(dp[i-1]/a[i-1])
            dp[i] = dp[i-1] - addStock * a[i-1]
            stock += addStock
            //console.log(`addStock=${addStock}`)
        } else {
        // 売却
            let rmStock = stock
            dp[i] = dp[i-1] + rmStock * a[i-1]
            stock -= rmStock
            //console.log(`rmStock=${rmStock}`)
        }
            //console.log(`stock=${stock}`)
    }
    console.log(dp[n])
    

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));