# @param {Integer} x
# @return {Integer}
def reverse(x)
    
    return 0 if x >= 2**31
    return -reverse(-x)  if x<0
    rev = x.digits.join("").to_i
    return 0 if rev >= 2**31
end