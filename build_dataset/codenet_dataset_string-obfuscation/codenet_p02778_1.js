function main(input) 
{
    var x = "x";
    var output = Array(input.length).fill(x);
    console.log(output.join(""));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));