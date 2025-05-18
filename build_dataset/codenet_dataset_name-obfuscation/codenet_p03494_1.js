function main(input){
  var nums = input.split('\n')[1].split(' ').map((n) => parseInt(n,10));
  var count = 0;
  while(nums.every((n) => (n % 2) === 0)) {
        count++;
        nums = nums.map((n) => n / 2);
    }

  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));