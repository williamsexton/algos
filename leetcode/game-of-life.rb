# @param {Integer[][]} board
# @return {Void} Do not return anything, modify board in-place instead.

def game_of_life(board)
    (0...board.length).each do |i|
        (0...board[i].length).each do |j|
            board[i][j] = cell_change(board, i, j)
            p board
        end
    end
    board.map! do |row|
        row.map! {|ele| (ele == 6 || ele == 8) ? 1 : 0 }
    end
    board
end


def cell_change(grid, i, j)
    surrounding =  [grid[i][j+1]]
    if i > 0
        surrounding.push(grid[i-1][j], grid[i-1][j+1]) 
        surrounding.push(grid[i-1][j-1]) if j > 0
    end
    if i < grid.length-1 
        surrounding.push(grid[i+1][j], grid[i+1][j+1])
        surrounding.push(grid[i+1][j-1]) if j > 0 
    end
    surrounding.push(grid[i][j-1]) if j > 0

    p surrounding
        
    if grid[i][j] == 1 
        return 3 if surrounding.count(1) + surrounding.count(3) + surrounding.count(6) < 2 || surrounding.count(1) + surrounding.count(3) + surrounding.count(6) > 3
        return 6
    else
        return 8 if surrounding.count(1) + surrounding.count(3) + surrounding.count(6) == 3
        return 4
    end
end