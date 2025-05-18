function main(arg) {
    var size = arg.split("\n")[0].split(" ")
    var sel = arg.split("\n")[1].split(" ")
    console.log(size[0]*size[1]-size[1]*sel[0]-(size[0]-sel[0])*sel[1])
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
