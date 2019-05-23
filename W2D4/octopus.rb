class Octopus
  FISHES = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'] # NEMO is that you?

  tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ] # Let's dance

  tiles_hash = {
    "up" : 0,
    "right-up":1, 
    "right": 2, 
    "right-down":3, 
    "down":4, 
    "left-down":5, 
    "left":6,  
    "left-up":7 
  }
     # Let's dance with hash!
 
  def sluggish_octopus
    # O(n^2), iterate the array twice
    max = 0
    (0...FISHES.length).each do |idx|
      (0...FISHES.length).each do |subidx|
        max = subidx if FISHES[subidx] >= max
      end
    end
    FISHES[max]
  end

  def dominant_octopus_caller
    dominant_octopus(FISHES.dup).last
  end

  def dominant_octopus(fishes)
    # O(n log n) would be Quick Sort or Merge Sort
    return fishes if fishes.length <= 1 
    pivot = fishes.first
    left = fishes.select { |ele| ele.length <=> pivot.length <= 0 }
    right = fishes.select { |ele| ele.length <=> pivor.length > 0 }
    dominent_octopus(left) + [pivot] + dominent_octopus(right)
  end

  def clever_octopus
    # O(n), just iterate through the list once i guess?
    max = 0
    FISHES.each_with_index { |ele, idx| max = idx if ele.length >= FISHES[max].length }
    FISHES[max]
  end

  def slow_dance(direction, tiles_array)
    tiles_array.each_with_index { |ele, idx| return idx if direction == ele }
    nil
  end

  def fast_dance(direction, tiles_hash)
    return tiles_hash[direction]
  end

end
