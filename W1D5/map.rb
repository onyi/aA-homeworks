class Map

  def initialize
    @map = []
  end

  def set(key, value)
    check_map = get(key)
    check_map.nil? ? @map << [key, value] : check_map[1] = value
  end

  def get(key)
    @map.each { |ele| return ele if ele[0] == key }
    nil
  end

  def delete(key)
    @map.each_with_index do |ele,idx| 
      @map[idx] = nil if @map[idx][0] == key
      return true
    end
    false
  end

  def show
    p @map
  end
end