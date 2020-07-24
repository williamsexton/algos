# @param {String} pattern
# @param {String} str
# @return {Boolean}
def word_pattern(pattern, str)
    words = str.split(" ")
    hash = Hash.new(false)
    return false unless words.length == pattern.length
    pattern.each_char.with_index do |char, idx|
        return false if hash[char] && hash[char] != words[idx]
        return false if hash.has_value?(words[idx]) && hash[char] != words[idx]
        hash[char] = words[idx]
    end
    return true
end