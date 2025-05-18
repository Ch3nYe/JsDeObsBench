function main(input) {
    console.log(10 - Math.floor(input / 200));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));