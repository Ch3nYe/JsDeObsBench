function Main(input) {
    input = input.split("\n");
    var mem = input[0].split(" ");
    var arr = input[1].split(" ").map(Number);
    for(var p=0;p<mem[1];p++){
        var tmp = new Array(arr.length).fill(0);
        for (var i = 0; i < arr.length; i++) {
            var n = arr[i];
          //  console.log(i,n)
            var min = i - n;
            var max = i + n;
            if (min < 0) min = 0;
            if (max > arr.length-1) max = arr.length-1;
            for (var j = min; j <= max; j++) {
                tmp[j]++;
            }
          //  console.log(max,min,tmp)
        }
      //  console.log(arr)
        var flag = true;
      //  console.log(arr.length)
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]!=tmp[i]) flag = false;
            arr[i] = tmp[i];
        }
     //   console.log(arr.join(" "));
        if(flag) break;
    }
    console.log(arr.join(" "));
} Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());