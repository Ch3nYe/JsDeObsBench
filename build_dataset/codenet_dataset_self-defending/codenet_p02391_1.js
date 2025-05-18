function main(input){
    let nums = input.split(" ").map(item=>parseInt(item));
    if(nums[0]>nums[1]){
        console.log("a > b");
    }else if(nums[0]<nums[1]){
        console.log("a < b");
    }else{
        console.log("a == b");
    }
    
    
}

main(require("fs").readFileSync("/dev/stdin","utf-8"));
