# @param {Integer} num
# @return {Integer}
def add_digits(num)
    while num > 9
        num_string = num.to_s
        digits = num_string.split("")
        digits.map! do |digit|
            digit.to_i
        end
        sum = 0
        digits.each do |digit|
            sum += digit            
        end
        num = sum
    end
    num
end


num = 2 #number
num_string = "1" #string
digits = [1, 1]
sum = 2