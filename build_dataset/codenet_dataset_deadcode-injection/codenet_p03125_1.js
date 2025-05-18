function main(input) {
   input = input.trim();
  const a = input.split(" ").map(Number);
	console.log(a[1]%a[0]==0?a[0]+a[1]:a[1]-a[0]);
  
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));