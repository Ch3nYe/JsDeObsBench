function main(input) {
    const nums = input.split(" ");
    
    if(nums.indexOf('5') != -1) {
         nums.splice(nums.indexOf('5'),1);
    }
    if(nums.indexOf('5') != -1) {
         nums.splice(nums.indexOf('5'),1);
    }
    if(nums.indexOf('7') != -1) {
         nums.splice(nums.indexOf('7'),1);
    }
    console.log(nums[0] == null ? "YES" : "NO");
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));