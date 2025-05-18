function Main(input){
    input = input.split("\n");
    var k = 0;
    while(1){
        input[k] = input[k].split(" ");
        var m = parseInt(input[k][0],10);
        var nmin = parseInt(input[k][1],10);
        var nmax = parseInt(input[k++][2],10);
        if(m == 0 && nmin == 0 && nmax == 0)
            break;

        var maxg = 0,maxn = 0;

        var p = [];
        for(var i = 0;i < m;i++)
            p[i] = parseInt(input[k++],10);

        for(var i = nmin - 1;i < nmax;i++){
            if(p[i] - p[i + 1] >= maxg){
                maxg = p[i] - p[i + 1];
                maxn = i;
            }
        }
        console.log(maxn + 1);
    }
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));