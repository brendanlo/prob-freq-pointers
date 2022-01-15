// add whatever parameters you deem necessary

/* Write a function called averagePair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target. */

// Input will be array of numbers and target number.
function averagePair(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // Make sure left end doesn't exceed right end
    while (left < right) {
        if ((nums[left] + nums[right])/2 == target) {
            return true;
        }
        //If average of pair is larger than target, decrease right index by 1.
        else if ((nums[left] + nums[right])/2 > target) {
            right--;
        }
        //If average of pair is less than target, increase left index by 1.
        else {
            left++;
        }
    }
    //If there's no pair return false.
    return false;


}
