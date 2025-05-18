var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

var n=lines[0]|0;
var s=lines.slice(1);

function good(a,b){
    for(var i=0;i<n;++i){
        for(var j=0;j<n;++j){
            if(s[(i+a)%n][(j+b)%n]!==s[(j+a)%n][(i+b)%n])return 0;
        }
    }
    return 1;
}

var ans=0;
for(var a=0;a<n;++a){
    for(var b=0;b<n;++b){
        ans+=good(a,b);
    }
}
console.log(ans);
