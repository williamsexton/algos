# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    i = 0
    (0...nums.length).each do
        if nums[i] == 0
            nums.push(nums.delete_at(i))
        else
            i += 1
        end
    end
    nums
end
