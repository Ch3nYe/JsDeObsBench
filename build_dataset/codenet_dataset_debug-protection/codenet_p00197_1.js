(function () {
  var input = '',
      cnt = 0;

  function main () {
    var inputLen, nums, x, y, temp, ans;

    inputLen = input.length;
    
    for (i = 0; i < inputLen; i += 1) {
      nums = input[i].split(' ');
      x = parseInt(nums[0], 10);
      y = parseInt(nums[1], 10);

      if (x === 0 && y === 0) {
        break;
      } else if (x < y) {
        temp = x;
        x = y;
        y = temp;
      }

      ans = gcd(x, y);

      showResult(ans, cnt);
      cnt = 0;
    }
  }

  function gcd (x, y) {
    cnt += 1;
    return x % y === 0 ? y : gcd(y, x % y);
  }

  function showResult(result, cnt) {
    console.log(result + ' ' + cnt);
  }

  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (chunk) {
    input += chunk;
  });

  process.stdin.on('end', function () {
    input = input.split('\n');
    main();
  });
}());