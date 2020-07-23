# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
    
    bucket = -1
    index = 0
    
    
    while index < nums.length
        bucket = nums[index]
        while in_range?(bucket,nums)
           nums[bucket-1], bucket = bucket, nums[bucket-1]
            bucket = -1 if nums[bucket-1] == bucket
        end
        index += 1
    end
    
    i=0
    while i+1 == nums[i]
       i+=1 
    end
    return i+1
end


def in_range?(num, nums)
   num >= 1 && num <= nums.length
end