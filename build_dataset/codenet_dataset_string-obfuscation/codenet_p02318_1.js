function LD(a, b){
    var ar = new Array();
    for(var i = 0; i < a.length + 1; i++){
        var subar = new Array();
        for(var j = 0; j < b.length + 1; j++){
            subar.push(0);
        }
        ar.push(subar);
    }

    for(var i = 0; i < a.length + 1; i++){
        ar[i][0] = i;
    }

    for(var i = 0; i < b.length + 1; i++){
        ar[0][i] = i;
    }

    for(var i = 1; i < a.length + 1; i++){
        for(var j = 1; j < b.length + 1; j++){
            if(a.charAt(i - 1) == b.charAt(j - 1)){
                ar[i][j] = Math.min(ar[i - 1][j] + 1, ar[i][j - 1] + 1, ar[i - 1][j - 1]);
            }else{
                ar[i][j] = Math.min(ar[i - 1][j] + 1, ar[i][j - 1] + 1, ar[i - 1][j - 1] + 1);
            }
        }
    }
    return ar[a.length][b.length];
} 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var strings = input.split('\n');

console.log(LD(strings[0], strings[1]));