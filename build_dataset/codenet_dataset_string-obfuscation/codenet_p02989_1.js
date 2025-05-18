const main = input => {
    var d = input[1].split(' ').map(p => parseInt(p, 10)).sort((p,q) => p>q?1:-1);
    console.log(d[d.length/2]-d[d.length/2-1]);   
}
main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));
