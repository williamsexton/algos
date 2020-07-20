# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    curr = 0
    max = nums[0]
    nums.each do |ele|
        
        curr += ele
        max = curr if curr > max
        curr = 0 if curr < 0
    
    end
    return max
    
end
# [-2,1,-3,4,-1,2,1,-5,4]