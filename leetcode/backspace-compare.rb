# @param {String} s
# @param {String} t
# @return {Boolean}
def backspace_compare(s, t)
    stack1 = []
    stack2 = []
    s.each_char do |char|
       if char == "#"
           stack1.pop
       else
           stack1.push(char)
       end
    end
    t.each_char do |char|
       if char == "#"
           stack2.pop
       else
           stack2.push(char)
       end
    end
    stack1 == stack2
end