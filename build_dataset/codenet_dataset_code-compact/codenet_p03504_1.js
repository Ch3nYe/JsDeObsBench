function max(array){
  var result = -1 * Infinity;
  for(num of array){
    if(result < num){result = num;}
  }
  return result;
}

function main(input){
  const lines = input.split('\n')
  const nums = lines.map(line => line.split(' ').map(x => parseInt(x)));

  var n_c= nums.shift();
  const N = n_c[0];
  const C = n_c[1];
  const t = Array(200002);
  const max_recorders = Array(200002);
  max_recorders.fill(0);

  for(var c=1;c<=C;c++){
    t.fill(0)

    for(var n=0;n<N;n++){
      if(nums[n][2]==c){
        t[nums[n][0]*2-1]++;
        t[nums[n][1]*2]--;
      }
    }

    for(var i=1;i<200002;i++){
      t[i] += t[i-1];
    }

    for(var i=1;i<200002;i++){
      if(t[i]>0){
        max_recorders[i]++;
      }
    }


  }

//  console.log(nums);
//  console.log(t);
  console.log(max(max_recorders));
//  console.log((max_recorders));
}



main(require('fs').readFileSync('/dev/stdin', 'utf8'));