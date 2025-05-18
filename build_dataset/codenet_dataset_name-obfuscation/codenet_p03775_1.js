// Atcoder057 - C
function divisor(n) {var ret=[]; for (var i=1;i*i<=n;i++){if(n%i==0){ret.push(i);if(i*i!=n)ret.push(n/i);}}return ret;}
function f(a , b){return Math.max(`${a}`.length, `${b}`.length);}
function main(input) {
  var inputs = input.split('\n');
  var n = parseInt(inputs[0], 10);

  var divisors = divisor(n).sort((a, b) => a - b);
  var surplus = divisors.length % 2;

  var lastIndex = divisors.length - 1;
  var halfLen = Math.floor(divisors.length / 2);

  var minF = `${n}`.length;
  for (var i = 0; i < halfLen - surplus; i++) {
    minF = Math.min(minF, f(divisors[i], divisors[lastIndex - i]));
  }
  if (surplus == 1) minF = Math.min(minF, `${divisors[halfLen]}`.length);

  console.log(minF);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
