class Board
  attr_accessor :cups

  attr_reader :player_cups

  def initialize(name1, name2)
    @cups = Array.new(14) {Array.new}
    place_stones
    @name1 = name1
    @name2 = name2
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, idx|
      next if idx == 6 || idx == 13
      4.times { cup << :stone }
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos < 0 || start_pos > 14
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    pos = start_pos
    until stones.empty?
      pos += 1
      pos = 0 if pos > 13
      if pos == 6
        # Player 1 home
        @cups[pos] << stones.pop if @name1 == current_player_name
      elsif pos == 13
        @cups[pos] << stones.pop if @name2 == current_player_name
      else
        @cups[pos] << stones.pop
      end
    end
    render
    next_turn(pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups.take(6).all? { |cup| cup.empty? } || @cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    player1_cnt = @cups[6].length
    player2_cnt = @cups[13].length
    return :draw if player1_cnt == player2_cnt
    player1_cnt > player2_cnt ? @name1 : @name2

  end
end
