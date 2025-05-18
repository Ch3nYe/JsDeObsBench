let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let Arr = (input.trim()).split("\n");
let bmis = new Map()

while(1){
    let n = Arr[0];
    if(n == 0) break;
    Arr.shift();
    
    for(var i = 0;i < n;++i){
        var nums = Arr[0].split(" ").map(Number);
        var m = nums[1] / 100
        var bmi = nums[2] / (m * m);
        var dif = Math.abs(22 - bmi)
        bmis.set(nums[0].toString(),dif);
        Arr.shift();
    }
    let sorted = new Map([...bmis.entries()].sort((a, b) => a[1] - b[1]));
    console.log(sorted.keys().next().value);
}
