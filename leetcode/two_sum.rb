# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    obj = {}
    nums.each_with_index do |num, idx|
        return [obj[num], idx] if obj[num]
        obj[target-num] = idx
    end
end

# {name: 'will', height:100}