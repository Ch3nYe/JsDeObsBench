function Main(input) {
    var input = input.split(' ');
    var A = input[0];
    var B = input[1];
    var cnt = 0;
    function hoge(){
        var x = A.toString();
        if(x[0] === x[4] && x[1] === x[3]){
            return true;
        }
    }
    while(A <= B) {
     if(hoge()) {
            cnt++;
        }
    A++;
    }
    console.log(cnt);
    }
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));