function main(input) {
    const nums = input.trim().split(/\s/).map(str=>{return Number(str)});
    console.log((nums[0] / nums[1]).toFixed(10));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));