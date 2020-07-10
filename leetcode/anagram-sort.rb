# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
    group_hash = {}
    
    strs.each do |str|
        new_hash = Hash.new(0)
        
        str.chars.each do |char|
            new_hash[char] += 1
        end
        
        if group_hash[new_hash]
            group_hash[new_hash] << str
        else
            group_hash[new_hash] = [str]
        end
    end
    group_hash.values.reverse
end