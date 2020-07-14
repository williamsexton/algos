# @param {String} s
# @return {Boolean}
def is_valid(str)
    stack = []
    hash = { "(" => ")", "[" => "]", "{" => "}"}
    res = true
    str.each_char do |char|
        (hash.has_key?(char)) ? stack << char : (char == hash[stack[-1]]) ? stack.pop : res = false
        end
        # if hash.has_key?(char)
        #     stack << char
        # elsif char == hash[stack[-1]]
        #     stack.pop
        # else
        #     return false
        # end
    return res && stack.length == 0
end