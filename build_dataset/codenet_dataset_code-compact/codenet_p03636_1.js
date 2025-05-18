function Main(input){
    input = String(input);

    var len = input.length;
    var first = input.substring(0,1);

    if(len < 4){
        var mid = 1;
    }else{
        var mid = len - 2;
    }

    var last = input.substring(len - 1, len);

    console.log('%s', first + String(mid) + last);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
