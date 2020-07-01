def detect_capital_use(word)
    word == word.capitalize || word == word.upcase || word == word.downcase
end