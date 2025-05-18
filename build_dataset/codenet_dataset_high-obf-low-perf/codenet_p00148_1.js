let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n");

for(var i = 0;i < Arr.length;++i){
    let n = Arr[i];
    var ans = n % 39;
    if(ans == 0) ans = 39
    if(ans < 10){
        ans = "0" + ans
    }
    console.log("3C"+ ans);
}

