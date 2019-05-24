class LRUCache

  def initialize(size)
    @cache = Array.new(size)
    @max_size = size
  end

  def count
    # returns number of elements currently in cache
    @cache.length
  end

  def add(el)
    # adds element to cache according to LRU principle
    @cache.shift if count > @max_size
    @cache << el
  end

  def show
    # shows the items in the cache, with the LRU item first
    @cache
  end

  private
  # helper methods go here!



end