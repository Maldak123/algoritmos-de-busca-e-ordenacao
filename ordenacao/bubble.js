function bubble(nums) {
  for(let i = 0; i < nums.length - 1; i++){
    let vari;

    if(nums[i] > nums[i + 1]){
      vari = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = vari;
      bubble(nums);
    }
  }
  return nums;
}

const num = [5, 4, 7, 6, 32, 9, 4, 8, 26, 7, 92, 187, 3];
console.log(bubble(num));