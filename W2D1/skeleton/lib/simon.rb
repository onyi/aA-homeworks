class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    take_turn until @game_over
    if @game_over 
      game_over_message
      reset_game
    end


  end

  def take_turn
    show_sequence
    require_sequence
    unless @game_over
      round_success_message
      @sequence_length += 1
    end

  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      # display each color in 2 second delay, and then clear terminal
      p color
      sleep(1.5)
    end
    system("clear")
  end

  def require_sequence
    @seq.each do |color|
      print "Please enter your color sequence: "
      user_input = gets.chomp
      unless user_input == color
        @game_over = true 
        return false
      end
    end
    return true
  end

  def add_random_color
    color = COLORS.sample
    @seq << color
  end

  def round_success_message
    p "You have successfully repeated the pattern. Great work!"
  end

  def game_over_message
    p "Uh-oh, that was not the correct pattern. Try again next time :)"
    p "Correct Pattern is: "
    @seq.each { |color| p color }
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end


simon = Simon.new
simon.play