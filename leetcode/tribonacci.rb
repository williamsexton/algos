# @param {Integer} n
# @return {Integer}
def tribonacci(n, memo = {0 => 0, 1 => 1, 2 => 1})
    return memo[n] if memo.has_key?(n)
    
    memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo)
    
    return memo[n]
end